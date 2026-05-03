const destinations = {

  india: [
    {
      name: "Taj Mahal",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
      desc: "World famous monument of love."
    },
    {
      name: "Goa Beach",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      desc: "Popular beach destination."
    },
    {
      name: "Kerala Backwaters",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      desc: "Peaceful canals and houseboat cruises."
    }
  ],

  france: [
    {
      name: "Eiffel Tower",
      image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e",
      desc: "Symbol of Paris."
    },
    {
      name: "Louvre Museum",
      image: "https://images.unsplash.com/photo-1565099824688-e93eb20fe622",
      desc: "World's largest art museum."
    },
    {
      name: "French Riviera",
      image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60a",
      desc: "Beautiful Mediterranean coastline."
    }
  ],

  japan: [
    {
      name: "Mount Fuji",
      image: "https://images.unsplash.com/photo-1505067216369-2c5a6b5c5e6f",
      desc: "Japan's highest mountain."
    },
    {
      name: "Tokyo City",
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
      desc: "Modern skyline and vibrant culture."
    },
    {
      name: "Kyoto Temples",
      image: "https://images.unsplash.com/photo-1504788363733-507549153474",
      desc: "Historic temples and traditions."
    }
  ],

  italy: [
    {
      name: "Colosseum",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
      desc: "Ancient Roman amphitheater."
    },
    {
      name: "Venice Canals",
      image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
      desc: "Famous waterways and gondolas."
    },
    {
      name: "Amalfi Coast",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      desc: "Stunning coastal cliffs and villages."
    }
  ],

  usa: [
    {
      name: "Statue of Liberty",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      desc: "Symbol of freedom in New York."
    },
    {
      name: "Grand Canyon",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      desc: "Massive canyon landscape."
    },
    {
      name: "Golden Gate Bridge",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      desc: "Iconic bridge in San Francisco."
    }
  ]

};


function explore() {
  const country = document.getElementById("country").value;
  const error = document.getElementById("error");
  const loading = document.getElementById("loading");
  const results = document.getElementById("results");

  results.innerHTML = "";
  error.innerHTML = "";

  if (country === "") {
    error.innerHTML = "⚠ Please select a country";
    return;
  }

  loading.innerHTML = "Loading destinations...";

  setTimeout(() => {
    loading.innerHTML = "";

    destinations[country].forEach(place => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${place.image}" alt="${place.name}">
        <h3>${place.name}</h3>
        <p>${place.desc}</p>
      `;

      results.appendChild(card);
    });

  }, 800);
}