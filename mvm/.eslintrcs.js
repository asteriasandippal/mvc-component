module.exports = {
    "env": {
        "browser": true,
    },
    "extends": "airbnb",
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "error",
            "always"
        ],
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/forbid-prop-types": ["off"]
    },
    "globals": {
        "fetch": true
    }
};