import exifr from "exifr";
import fs from "fs";
import * as globby from "globby";
import { promisify } from "util";

export const getPhotoData = async (pattern) => {
  const data = await Promise.all(
    (await globby(pattern)).map((path) =>
      promisify(fs.readFile)(path)
        .then(exifr.parse)
        .then((exif) => ({ exif, path }))
    )
  );

  return data;
};

export const parsePhoto = (photo) => {
  const parts = photo.exif.ImageDescription?.split(", ");
  return {
    slug: photo.path.split("/").pop().replace(".jpeg", ""),
    place: [parts[0], parts.pop()].join(", "),
    date:
      photo.exif.DateTimeOriginal?.toJSON() ||
      photo.exif.CreateDate?.toJSON() ||
      null,
    camera: photo.exif.Model ? photo.exif.Model : null,
    fnumber: photo.exif.FNumber,
    iso: photo.exif.ISO,
    focalLength: photo.exif.FocalLength,
    exposureTime: photo.exif.ExposureTime,
    width: photo.exif.ExifImageWidth, // Does not provide correct dimension
    height: photo.exif.ExifImageHeight, // Does not provide correct dimension
  };
};

export const getAllPhotos = async () => {
  const photos = (await getPhotoData("public/photos/*.jpeg")).map(parsePhoto);
  return photos;
};
