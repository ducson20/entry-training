const regions = {
  france: {
    user: {
      name: "Long",
      age: 20,
      active: false,
      address: {
        houseNumber: "10C",
        street: "Quang Trung",
        district: "Hai Chau",
        city: "Da Nang",
      },
    },
  },
  england: {
    user: {
      name: "Vuong",
      age: 22,
      active: true,
    },
  },
};

let temp = [];

// Get
temp = _.get(regions, "france", "Hoang");

// Set
temp = _.set(regions, "american", {});

// Find Key
temp = _.findKey(regions, (region) => region.user.name === "Vuong");

// Map Value
temp = _.mapValues(regions, (region) => region ?? region.user.active);

// Assign
temp = _.assign({}, { user: "Son" }, { user: undefined });

console.log(temp)

// Pick
temp = _.pick(regions, ["france", "american"]);

// Clone
temp = _.cloneDeep(regions);

const copyRegion = regions;
copyRegion.france.user.name = "Son";

// console.log("Copy user: ", copyRegion);
// console.log("Regions: ", regions);

function validateInput() {
  let input = document.getElementById("input-field");
  input.addEventListener("input", _.debounce(validateInput, 500));
  console.log(input.value)
  // _.throttle;
  // https://css-tricks.com/debouncing-throttling-explained-examples/
}
validateInput();
