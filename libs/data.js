import exifr from "exifr";
import fs from "fs";
import * as globby from "globby";
import * as matter from "gray-matter";
import { promisify } from "util";
import { parsePhoto, parsePost, parseProject } from "~/libs/parser";

export const getMdxData = async (pattern) => {
  const data = await Promise.all(
    (await globby(pattern)).map((path) =>
      promisify(fs.readFile)(path, "utf-8").then((source) => ({
        ...matter(source),
        path,
      }))
    )
  );

  return data;
};

export const getImageData = async (pattern) => {
  const data = await Promise.all(
    (await globby(pattern)).map((path) =>
      promisify(fs.readFile)(path)
        .then(exifr.parse)
        .then((exif) => ({ exif, path }))
    )
  );

  return data;
};

export const getAllProjects = async () => {
  const projects = (await getMdxData("pages/projects/*.mdx")).map(parseProject);
  return projects;
};

export const getAllPosts = async () => {
  const posts = (await getMdxData("pages/posts/*.mdx")).map(parsePost);
  return posts;
};

export const getAllPhotos = async () => {
  const photos = (await getImageData("public/photos/*.jpeg")).map(parsePhoto);
  return photos;
};
