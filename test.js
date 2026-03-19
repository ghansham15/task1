function add(a, b) {
    return a + b;
}

// Test case
if (add(2, 3) === 5) {
    console.log("Test Passed");
} else {
    console.log("Test Failed");
    process.exit(1);
}