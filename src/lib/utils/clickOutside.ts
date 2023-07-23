export default function clickOutside(node: HTMLElement, callback: () => void) {
  const clickHandler = (event: MouseEvent) => {
    if (!node.contains(event.target as Node)) {
      callback();
    }
  }
  document.addEventListener("click", clickHandler)

  return {
    destroy() {
      document.removeEventListener("click", clickHandler)
    }
  }
}