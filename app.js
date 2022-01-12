function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
}
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
    observer.observe(elm);
};

function onEntry2(entry2) {
    entry2.forEach(change2 => {
      if (change2.isIntersecting) {
        change2.target.classList.add('elem-show');
      }
    });
}
  let options2 = { threshold2: [5] };
  let observer2 = new IntersectionObserver(onEntry2, options2);
  let elements2 = document.querySelectorAll('.elem-animation');
for (let elm2 of elements2) {
    observer2.observe(elm2);
};

function onEntry3(entry3) {
    entry3.forEach(change3 => {
      if (change3.isIntersecting) {
        change3.target.classList.add('elem-sh');
      }
    });
}
  let options3 = { threshold3: [5] };
  let observer3 = new IntersectionObserver(onEntry3, options3);
  let elements3 = document.querySelectorAll('.elem-anim');
for (let elm3 of elements3) {
    observer3.observe(elm3);
};
