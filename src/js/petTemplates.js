export const petTemplates = {
  card: (data) => `
    <div class="pet-card popIt" data-id="${data.name}">
      <div>
        <img src="${data.img}">
      </div>
      <div class="title">${data.name}</div>
      <button class="secondary-btn">Learn more</button>
    </div>
  `,
  popup: (data) => `
    <div class="info-card">
      <div class="photo">
        <img src="${data.img}">
      </div>
      <div class="content">
        <div class="name">${data.name}</div>
        <div class="type">${data.type} - ${data.breed}</div>
        <div class="description">${data.description}</div>
        <ul class="properties">
          <li><span>Age: </span>${data.age}</li>
          <li><span>Inoculations: </span>${data.inoculations.join(", ")}</li>
          <li><span>Diseases: </span>${data.diseases.join(", ")}</li>
          <li><span>Parasites: </span>${data.parasites.join(", ")}</li>
        </ul>
      </div>
    </div>
  `,
}
