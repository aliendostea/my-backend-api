# My Backend API

This project is a Node.js backend API built with Express, designed to handle various data types such as photos, songs, likes, and users with different permissions.

## Project Structure

```
my-backend-api
├── src
│   ├── app.js                # Initializes the Express application and sets up middleware
│   ├── server.js             # Entry point for starting the server
│   ├── config
│   │   └── database.js       # Database connection configuration
│   ├── controllers
│   │   ├── userController.js  # Handles user-related API requests
│   │   ├── photoController.js # Handles photo-related API requests
│   │   ├── songController.js  # Handles song-related API requests
│   │   └── likeController.js  # Handles like-related API requests
│   ├── routes
│   │   ├── userRoutes.js      # Sets up user-related API routes
│   │   ├── photoRoutes.js     # Sets up photo-related API routes
│   │   ├── songRoutes.js      # Sets up song-related API routes
│   │   └── likeRoutes.js      # Sets up like-related API routes
│   ├── models
│   │   ├── User.js            # Defines the User model
│   │   ├── Photo.js           # Defines the Photo model
│   │   ├── Song.js            # Defines the Song model
│   │   └── Like.js            # Defines the Like model
│   ├── middleware
│   │   ├── auth.js            # Authentication middleware
│   │   └── errorHandler.js     # Error handling middleware
│   └── utils
│       └── validators.js       # Utility functions for data validation
├── package.json               # pnpm configuration file
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd my-backend-api
   ```

2. Install dependencies:

   ```
   pnpm install
   ```

3. Set up your database configuration in `src/config/database.js`.

## Running the Application

To start the server, run:

```
pnpm start
```

The server will listen on the specified port (default is 3000).

## API Endpoints

- **Users**
  - Create, retrieve, update, and delete users.
- **Photos**
  - Upload, retrieve, and delete photos.
- **Songs**
  - Upload, retrieve, and delete songs.
- **Likes**
  - Like and unlike items.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
