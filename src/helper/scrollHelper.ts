export interface Iscroll {
  scroll: () => void;
}

export default function scrollHelper() {
  const scrollToElement  = (element_id: string) => {
    const listElement = document.getElementById(`${element_id}`);
    if (listElement) {
      const offset = 200;
      const tourPosition =
        listElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: tourPosition,
        behavior: "smooth",
      });
    }
  };

  return { scrollToElement };
}
