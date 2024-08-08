function Title({ title, headerLevel, invert }) {
  const CLASS_TITLE = "text-primary text-[32px] md:text-[64px]";
  let classTitle = `${CLASS_TITLE} ${invert == "ignore" ? "" : invert == "no" ? " hidden md:flex" : "md:hidden"}`;

  switch (headerLevel) {
    case 1:
      return <h1 className={classTitle}>{title}</h1>;
    case 2:
      return <h2 className={classTitle}>{title}</h2>;
    case 3:
      return <h3 className={classTitle}>{title}</h3>;
    case 4:
      return <h4 className={classTitle}>{title}</h4>;
    default:
      return <h1 className={classTitle}>{title}</h1>;
  }
}

export default Title;
