function reflect(userInput) {
  const input = userInput.toLowerCase();

  if (input.includes("good") || input.includes("happy")) {
    return "That's good! What made your day happy?";
  } else if (input.includes("stress") || input.includes("tired")) {
    return "It seems like you had a stressful day. Try taking breaks and practicing deep breathing.";
  } else if (input.includes("distraction")) {
    return "Try to listen music and reduce distractions.";
  } else {
    return "Reflect on your day and set goal for tomorrow.";
  }
}

// Example
console.log(reflect("I feel sad today"));
