## Daily Reflection Decision Tree

## Overview

This project represents a **Deterministic Decision Tree** designed for daily self-reflection.
It helps users analyze their day based on productivity, emotions, and challenges, and provides **actionable suggestions** for improvement.


## Objective

* To guide users easily through structured daily reflection
* To identify key factors affecting their day
* To provide personalized suggestions for improvement for users
  

## Approach

The decision tree is designed using a **top-down questioning strategy**:

1. Start with a general question about the user's day
2. Branch divided into positive and negative thoughts
3. Identify root causes for negative outcomes
4. Provide actionable suggestions at every endpoint


## Decision Tree Structure

Start
 └── How was your day today?
      ├── Good
      │     └── What made your day good?
      │           ├── Completed tasks
      │           │     └── Suggestion:
      │           │           - Maintain same routine
      │           │           - Track productivity daily
      │           │
      │           ├── Good mood / positive mindset
      │           │     └── Suggestion:
      │           │           - Continue gratitude practice
      │           │
      │           └── Social interactions
      │                 └── Suggestion:
      │                       - Stay connected with people
      │
      └── Not Good
            └── What was the main Problem?
                  ├── Lack of Efficiency
                  │     └── What caused it?
                  │           ├── Distractions
                  │           │     └── Suggestion:
                  │           │           - Use Pomodoro technique
                  │           │           - Reduce phone usage
                  │           │
                  │           ├── Poor planning
                  │           │     └── Suggestion:
                  │           │           - Create a to-do list
                  │           │           - Prioritize tasks
                  │           │
                  │           └── Low motivation
                  │                 └── Suggestion:
                  │                       - Breaks tasks into small steps
                  │                       - Reward yourself
                  │
                  ├── Stress / Overthinking
                  │     └── Suggestion:
                  │           - Take short breaks
                  │           - Practice a deep breathing
                  │           - listen to music
                  │
                  └── Personal Issues
                        └── Suggestion:
                              - Talk to someone you trust
                              - Reflect calmly
                              

 └── Final Step:
      └── “What is one key thing you will improve tomorrow?”
            └── Suggestion:
                  - Set 3 clear goals
                  - Sleep well
                  - Start fresh


## Key Features

* Simple and structured flow
* Covers both emotional and productivity aspects
* Provides actionable recommendations
* Easy to expand into an AI-based system


## Use of AI & Guardrails

- Verified AI-generated outputs   
- Modified responses to ensure logical consistency  
- Avoided generic or unrealistic suggestions  
- Ensured each branch provides meaningful and actionable outcomes
- Ensure each decision path leads to a clear and actionable outcome


## Thought Process

* Started with a broad question to capture overall user experience
* Segmented responses into positive and negative paths
* Identified root causes for negative experiences
* Designed each branch to end with actionable insights


## Future Improvements

* Convert decision tree into an interactive web app
* Add user input tracking
* Integrate AI for dynamic responses

## AI Agent 

A simple AI-based reflection agent is added in the repository.
It takes user input and provides basic reflective suggestions based on predefined logic.


## Submission Details

* Decision Tree: Included above
* Voice Explanation: https://drive.google.com/file/d/1h8OFaNWVoD859YO1ydk0mdQLoR609v2P/view?usp=sharing


## Conclusion

This project demonstrates how structured questioning can guide users toward meaningful self-reflection and continuous improvement.
