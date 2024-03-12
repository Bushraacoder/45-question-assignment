function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`Creating a ${size} T-shirt with the message: "${message}"`);
}

// Creating a large shirt with the default message
make_shirt();

// Creating a medium shirt with the default message
make_shirt("medium");

// Creating a small shirt with a custom message
make_shirt("small", "TypeScript is awesome!");
