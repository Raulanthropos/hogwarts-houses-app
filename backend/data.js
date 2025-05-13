const houses = [
    {
      id: "0367baf3-1cb6-4baf-bede-48e17e1cd005",
      name: "Gryffindor",
      houseColours: "Scarlet and gold",
      founder: "Godric Gryffindor",
      animal: "Lion",
      element: "Fire",
      ghost: "Nearly-Headless Nick",
      commonRoom: "Gryffindor Tower",
      heads: [
        {
          id: "530da97d-5a83-4ea6-bc15-790edf5b5efc",
          firstName: "Minerva",
          lastName: "McGonagall",
        },
        {
          id: "9915c5f8-9177-4f63-bba8-d04387a404f9",
          firstName: "Godric",
          lastName: "Gryffindor",
        },
      ],
      traits: [
        {
          id: "1773bce8-7a22-4d57-b8e1-7e1cbe26fa2b",
          name: "Courage",
        },
        {
          id: "21f22e43-efd9-4a43-87f5-eab5fb1666ea",
          name: "Chivalary",
        },
        {
          id: "60d8f5d0-de4b-41f7-b152-40543555bf3a",
          name: "Nerve",
        },
        {
          id: "68f73efc-fae9-4a54-b3e2-04bbe72f5d63",
          name: "Daring",
        },
        {
          id: "7e6d321d-fe7d-4c05-8ad7-ddabda83d8cd",
          name: "Determination",
        },
        {
          id: "adf83e9f-859b-41c4-947d-b359a05f8f3c",
          name: "Bravery",
        },
      ],
    },
    {
      id: "805fd37a-65ae-4fe5-b336-d767b8b7c73a",
      name: "Ravenclaw",
      houseColours: "Blue and bronze",
      founder: "Rowena Ravenclaw",
      animal: "Eagle",
      element: "Air",
      ghost: "Grey Lady",
      commonRoom: "Ravenclaw Tower",
      heads: [
        {
          id: "102ac5fc-db71-4055-8250-bc238cffb3d9",
          firstName: "Filius",
          lastName: "Flitwick",
        },
        {
          id: "57c04cf4-f3dd-46d6-a78f-84c30fb42533",
          firstName: "Rowena",
          lastName: "Ravenclaw",
        },
      ],
      traits: [
        {
          id: "08a54d21-6137-4eda-9c32-004706650b44",
          name: "Learning",
        },
        {
          id: "5056effc-b92b-4f86-96fd-978b26a849da",
          name: "Acceptance",
        },
        {
          id: "78db6224-33d1-490d-a553-9bbbedb3282a",
          name: "Inteligence",
        },
        {
          id: "ab88a4fb-1c4d-4e14-88bf-7f55dfabb75a",
          name: "Wisdom",
        },
        {
          id: "e43d0b2f-dcfe-4a5f-b3ab-d39679bbfbe3",
          name: "Wit",
        },
        {
          id: "ffc55017-c03f-490a-9c48-2f38af6e2f0a",
          name: "Creativity",
        },
      ],
    },
    {
      id: "85af6295-fd01-4170-a10b-963dd51dce14",
      name: "Hufflepuff",
      houseColours: "Yellow and black",
      founder: "Helga Hufflepuff",
      animal: "Badger",
      element: "Earth",
      ghost: "Fat Friar",
      commonRoom: "Hufflepuff Basement",
      heads: [
        {
          id: "a593e800-95dc-47ab-9243-6ac98d2f6ab4",
          firstName: "Helga",
          lastName: "Hufflepuff",
        },
        {
          id: "fab07935-774e-4eb4-8ed5-621bfe416d85",
          firstName: "Pomona",
          lastName: "Sprout",
        },
      ],
      traits: [
        {
          id: "22d8bc5b-67ee-49fb-89ee-8811fc22062b",
          name: "Hardworking",
        },
        {
          id: "76973c67-0dd1-4aca-b0b7-b053d9eaf206",
          name: "Patience",
        },
        {
          id: "a8494f18-caff-491e-96e3-1ff73bd6f4ab",
          name: "Loyalty",
        },
        {
          id: "af80b93e-3c61-4586-824a-8f7e6ac4ae0a",
          name: "Just",
        },
        {
          id: "c080647f-5b31-434f-8327-376abbfb0989",
          name: "Fairness",
        },
        {
          id: "f62f4753-fdb5-473b-a8ac-07c1b5844eec",
          name: "Modesty",
        },
      ],
    },
    {
      id: "a9704c47-f92e-40a4-8771-ed1899c9b9c1",
      name: "Slytherin",
      houseColours: "Green and silver",
      founder: "Salazar Slytherin",
      animal: "Serpent",
      element: "Water",
      ghost: "Bloody Baron",
      commonRoom: "Slytherin Dungeon",
      heads: [
        {
          id: "36ba2ceb-6b6f-48a3-b512-9c1e66321eff",
          firstName: "Horace",
          lastName: "Slughorn",
        },
        {
          id: "5cac8ad3-b5fc-4c48-a951-990cdd5671bc",
          firstName: "Salazar",
          lastName: "Slytherin",
        },
        {
          id: "ef90f8c9-9f03-478e-baec-8a3c487e5271",
          firstName: "Severus",
          lastName: "Snape",
        },
      ],
      traits: [
        {
          id: "0992c505-80dd-4b49-ad0b-3b7383d6ec89",
          name: "Resourcefulness",
        },
        {
          id: "36dad9bf-010e-47ef-8908-ecb6d5acfac5",
          name: "Selfpreservation",
        },
        {
          id: "42b7c304-5e62-4fae-9e52-f8c6a106e406",
          name: "Ambition",
        },
        {
          id: "540aaafe-6185-4dc8-94ed-bd0236b433d3",
          name: "Cunning",
        },
        {
          id: "d7b7c1b7-3fce-4474-9fd1-9b731e0b2649",
          name: "Pride",
        },
        {
          id: "df43d46b-1ebf-409d-a63e-6c6bcb049aef",
          name: "Determination",
        },
      ],
    },
  ];

export default houses;