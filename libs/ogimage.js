const { NEXT_PUBLIC_CANON_ROOT: canon_root } = process.env;

export function getOgImgeUrlObject(text) {
  return canon_root
    ? [
        {
          url: `${canon_root}/og-image/${text}.png`,
        },
      ]
    : [];
}

export function getPhotoUrlObject(slug) {
  return canon_root
    ? [
        {
          url: `${canon_root}/photos/${slug}.jpeg`,
        },
      ]
    : [];
}
