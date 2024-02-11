const mileStonesData = data.data;
function displayMileStones() {
  const mileStoneContainer = document.querySelector("#mileStones_container");
  mileStoneContainer.innerHTML = mileStonesData.map((milestone) => {
    return `<div onclick="mileStonePlaceHolder(${
      milestone._id
    })" class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" checked="checked" />
        <div
          class="collapse-title text-base font-medium flex items-center space-x-5"
        >
          <input type="checkbox" checked="checked" class="checkbox" />
          <h1>${milestone.name}</h1>
        </div>
        <div class="collapse-content">
        ${milestone.modules.map((module) => `<p>${module.name}</p>`)}
        </div>
      </div>`;
  });
}

displayMileStones();

function mileStonePlaceHolder(id = "0") {
  const mileStonesCover = document.querySelector("#milestone_cover");
  const mileStoneTitle = document.querySelector("#milestone_title");
  const mileStoneDescription = document.querySelector("#milestone_description");
  const searchMilestone = mileStonesData.find(
    (milestone) => milestone._id === id.toString()
  );
  mileStonesCover.src = searchMilestone.image;
  mileStoneTitle.innerHTML = searchMilestone.name;
  mileStoneDescription.innerHTML = searchMilestone.description;
}
mileStonePlaceHolder();
