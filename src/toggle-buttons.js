function toggleButtons(state) {
  const buttonElements = document.getElementsByClassName('button');

  Array.from(buttonElements).forEach((element) => {
    element.disabled = state !== 'on';
  });
}

export function enableButtons() {
  toggleButtons('on');
}

export function disableButtons() {
  toggleButtons('off');
}
