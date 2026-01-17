export const validateUser = (userData) => {
    const { username, email, password } = userData;
    const errors = {};

    if (!username || username.length < 3) {
        errors.username = "Username must be at least 3 characters long.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        errors.email = "Invalid email format.";
    }

    if (!password || password.length < 6) {
        errors.password = "Password must be at least 6 characters long.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

export const validatePhoto = (photoData) => {
    const { title, url } = photoData;
    const errors = {};

    if (!title || title.length < 3) {
        errors.title = "Title must be at least 3 characters long.";
    }

    if (!url || !url.startsWith('http')) {
        errors.url = "Invalid URL format.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

export const validateSong = (songData) => {
    const { title, artist, url } = songData;
    const errors = {};

    if (!title || title.length < 3) {
        errors.title = "Title must be at least 3 characters long.";
    }

    if (!artist || artist.length < 3) {
        errors.artist = "Artist name must be at least 3 characters long.";
    }

    if (!url || !url.startsWith('http')) {
        errors.url = "Invalid URL format.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

export const validateLike = (likeData) => {
    const { userId, itemId } = likeData;
    const errors = {};

    if (!userId) {
        errors.userId = "User ID is required.";
    }

    if (!itemId) {
        errors.itemId = "Item ID is required.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};