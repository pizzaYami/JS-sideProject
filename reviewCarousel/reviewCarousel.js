let data = [
  {
    id: 0,
    img: "./img/0.jpg",
    author: "Christian",
    job: "WEB DEVELOPER",
    info: `저는 창의적인 문제 해결과 협업을 통해 혁신적인 소프트웨어를 개발하는
  개발자입니다. 다양한 프로젝트 경험을 통해 빠르게 적응하며 지속적인
  성장을 추구하며, 사용자 중심의 사용하기 편리한 솔루션을 만들기 위해
  노력합니다.`,
  },
  {
    id: 1,
    img: "./img/1.jpg",
    author: "Emily",
    job: "DATA SCIENTIST",
    info: `데이터의 힘을 믿습니다. 수많은 데이터 속에서 유용한 정보와
  인사이트를 발견하여 사업에 가치를 더하고자 하는 데이터 과학자입니다.
  통계학, 머신 러닝, 딥 러닝 등 다양한 분야에 관심이 있으며, 복잡한
  문제를 해결하기 위해 끊임없이 노력합니다.`,
  },
  {
    id: 2,
    img: "./img/2.jpg",
    author: "Alex",
    job: "UX DESIGNER",
    info: `사용자 경험을 디자인하는 것에 열정을 가지고 있는 UX 디자이너입니다.
  간결하고 직관적인 디자인을 통해 사용자들이 제품을 더 쉽게 이해하고
  사용할 수 있도록 돕습니다. 사용자들의 피드백을 수용하며 디자인을
  지속적으로 개선하는 것을 중요하게 생각합니다.`,
  },
  {
    id: 3,
    author: "David",
    img: "./img/3.jpg",
    job: "MARKETING MANAGER",
    info: `마케팅의 중요성을 알고 있습니다. 혁신적인 마케팅 전략을 통해
  제품이나 서비스를 보다 넓은 고객층에게 홍보하고 확장하는 것을 목표로
  하는 마케팅 매니저입니다. 데이터 기반 의사 결정을 통해 효율적인
  마케팅 활동을 이끌어내는 것을 즐깁니다.`,
  },
];

// select items
const img = document.getElementById("person_img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const leftBtn = document.querySelector(".left_btn");
const rightBtn = document.querySelector(".right_btn");

let currentItme = 0;

function showPerson(person) {
  const item = data[person];
  author.textContent = item.author;
  job.textContent = item.job;
  info.textContent = item.info;
  img.src = item.img;
}

showPerson(currentItme);

leftBtn.addEventListener("click", function () {
  if (currentItme !== 0) {
    currentItme -= 1;
    showPerson(currentItme);
  }
});

rightBtn.addEventListener("click", function () {
  if (currentItme !== data.length - 1) {
    currentItme += 1;
    showPerson(currentItme);
  }
});
