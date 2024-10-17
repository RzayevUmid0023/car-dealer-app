# Car-dealer-app
- Click on the link to see the project. https://cardealerapp.netlify.app/
  
Car-dealer-app is a web application that allows users to select vehicle makes and years to view model information for a specific vehicle make and year. This application utilizes the [NHTSA Vehicle API](https://vpic.nhtsa.dot.gov/api/) to fetch vehicle data.

## Features

- **Vehicle Make Selection:** Users can select from available vehicle makes.
- **Year Selection:** Users can select vehicle years from 2015 to the present.
- **Model List:** Displays the list of relevant vehicle models based on the selected make and year.
- **Responsive Design:** Provides a compatible user experience on both mobile and desktop devices.

## Technologies

- **Next.js:** A React-based framework that performs both server-side and client-side rendering.
- **Tailwind CSS:** A CSS framework used to create the application's style and design.
- **NHTSA Vehicle API:** The API used to provide vehicle data.

## Installation

### Requirements

- **Node.js:** You need Node.js version 14 or higher to run the project.
- **NPM or Yarn:** Used to manage project dependencies.

### Steps

1. **Clone the Project Folder**

   To clone the project repository, run the following command in the terminal:

   ```bash
   git clone https://github.com/RzayevUmid0023/car-dealer-app.git
   cd car-dealer-app

2. **Install Required Packages**

   To install the necessary dependencies in the project directory:

   ```bash
   npm install or yarn install
   npm run dev



**Usage**
- Home Page: When the application opens, the user encounters a dropdown menu to select a vehicle make.
- Vehicle Make Selection: The user selects one of the available vehicle makes.
- Year Selection: The user selects a vehicle year from 2015 to the present.
- Next Button: After completing their selections, the user clicks the "Next" button to view the vehicl model list for the selected make and year.
- Model List: The vehicle models are displayed in a list according to the selected make and year. 

 **Install Required Packages**

  Create a file named .env.local in the project directory and add the following content:

![image](https://github.com/user-attachments/assets/270ecd13-24d6-4b8a-84a8-b5edfd1a3e09)
![image](https://github.com/user-attachments/assets/825d33db-0fff-4871-9832-6660bcd36968)
![image](https://github.com/user-attachments/assets/0719f761-1683-44b2-bd20-905f4e7576fa)






   ```bash
   MODELS_API_URL=https://vpic.nhtsa.dot.gov/api/vehicles
   API_URL=https://vpic.nhtsa.dot.gov/api/vehicles




