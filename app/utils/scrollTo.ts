export const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
  e.preventDefault();
  const el = document.getElementById(path);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};