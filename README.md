
# Sleep Log

Welcome to the repository for my Sleep Log App, a mobile application designed to help users monitor and understand their sleep patterns for improved well-being.

## About The Project

This Sleep Log App is built using React Native and Expo, which enables a seamless experience across both Android and iOS devices. The app features an intuitive interface with a night-time theme, allowing users to log their sleep, view detailed insights, and gain a better understanding of their sleep habits.

## Disclaimer: HIPAA Compliance

The Sleep Log App is currently non-HIPAA compliant and should not be used to store, process, or transmit any patient's identifiable information or health data. Users looking to implement this app within environments requiring HIPAA compliance should conduct thorough research and possibly consult a legal expert to ensure the app adheres to all necessary regulations for the secure and compliant handling of patient information.

## Features

- **User-friendly Sleep Logging**: Easily enter sleep times, quality, and additional notes.
- **Informative Sleep Insights**: View historical data with visual feedback on sleep trends.
- **Starry Night Theme**: A beautiful interface that’s easy on the eyes, especially in low-light conditions.


## To-Do List

- ⬜ **Implement .env variable handling**: Currently the database address is hardcoded, looking to implement .env variables.
- ⬜ **User Settings**: Implement the user settings page to allow users to customize their app experience.
- ⬜ **Placeholder for Logo**: Add a placeholder for the future company logo in the app header.
- ⬜ **Animations Refinement**: Refine the transition and loading animations to provide a smoother user interface.
- ⬜ **Database Seed**: Create a seeding script for the database to ease testing and initial setup for new developers.
- ⬜ **Provider Secure Access Code Generator**: Develop a secure system for generating and validating access codes given to users by their health providers.
- ⬜ **Dark Theme**: Integrate dark theme toggle
- ⬜ **User Data Export**: Enable providers to export sleep data



## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/rmaroukel/SleepLog.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the server
   ```sh
   npm run start:server
   ```
4. Run the client
   ```sh
   npm run start:client
   ```

## Prepare PostgreSQL

The application requires a database on the local machine (seed file with sample data is on the todo list).
In the meantime, prepare the database manually:

```sh
createdb sleeplogs
```
Run the following queries:
```sh
CREATE SEQUENCE sleeplogs_log_id_seq;
```

```sh
CREATE TABLE sleeplogs (
  log_id INT PRIMARY KEY DEFAULT nextval('sleeplogs_log_id_seq'::regclass),
  log_date DATE NOT NULL,
  used_sleep_aids BOOL NOT NULL,
  sleep_aid_details TEXT,
  bed_time TIME(6),
  sleep_attempt_time TIME(6),
  fall_asleep_duration INT,
  awakenings INT,
  awake_duration INT,
  final_awakening TIME(6),
  out_of_bed_time TIME(6),
  woke_up_early BOOL NOT NULL,
  woke_up_early_duration INT,
  napped BOOL NOT NULL,
  naps_count INT,
  nap_duration INT,
  sleep_quality INT,
  energy_level INT,
  mood_today INT
);
```

Be sure to edit the hardcoded ip address to match your local machine (.env variables on the todo list).

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Rami Maroukel - [@rmaroukel](https://www.linkedin.com/in/rmaroukel/)

Project Link: [https://github.com/rmaroukel/SleepLog](https://github.com/rmaroukel/SleepLog)

## Acknowledgements

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
