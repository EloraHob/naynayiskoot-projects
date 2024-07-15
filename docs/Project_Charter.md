![Nay Nay is Koot project logo](wireframes/naynayiskoot-logo.png)

# **Project Charter** 
|||
|--| --|
| Project| NAY NAY IS KOOT |
| Version | 1.0
| Status | Draft Mode 🚧 |
| Last Update | JULY 14 2024 |
| Author | Elora Hoberecht |
| Notes| Updated second draft |


## 1. Project Overview
*NAY NAY IS KOOT* is a personal web development project aimed at enhancing my programming skills while creating an engaging platform for my 12-year-old sister. This single-page web application will feature a Spotify widget and three interactive activities, serving as both a learning experience for me and an entertaining space for my sister, with potential interest from family members and her friends. 

The project will focus on implementing microservices architecture and integrating external APIs, providing a comprehensive learning experience in modern web development practices.

  ### 1.1 Goals
   - Develop fundamental web development skills through hands-on project work
   - Create a fun, interactive web space centered around my sister's interests
   - Learn and apply best practices in software development
   - Explore microservices architecture in a practical context

  ### 1.2 Learning Objectives
   - Understand and implement basic backend development concepts
   - Learn about API integration and microservices architecture
   - Develop project management and version control skills

  ### 1.3 Key Performance Indicators (KPIs)
   - **User Engagement:** Average session duration > 10 minutes
   - **Activity Completion:** Users complete at least 1 different activity per session
   - **Technical Performance:** Page load time < 3 seconds, API response time < 200ms
   - **User Satisfaction:** Positive feedback from primary user (sister)

  ### 1.4 Stakeholders
   | Role | Name | Responsibilities |
   |------|------|------------------|
   |Project Developer | Elora Hoberecht | Primary learner, responsible for all development |
   |Primary User | L.S. (sister) | Main user, provides feedback and inspiration |
   |Secondary Users | Family & Friends | Occasional users, provide additional feeback |

###### Interests include: *games*, *animation*, *music*, *ice cream, chocolate, & other sweets*, *absurdist comedy*. 

***

## **2. SCOPE**
 ### 2.1 In Scope
  * Single-page web application development
  * Spotify widget integration for song display and interaction
  * 3 microservices:
    * Quiz Generator (using JSON data)
    * Picture of the Day Reveal (using images from an S3 bucket)
    * Music Maker Game (inspired by AC's Town Tune)
  * User interface for activity selection and interaction
  * Basic error handling and user feedback mechanisms
 ### 2.1 Out of Scope
  * User authentication and profile management
  * Multiplayer or social features
  * Mobile app development (focus on web-only for MVP)
  * Content management system for dynamic activity addition
  * Advanced data analytics or reporting features
  * Monetization strategies
  * Third-party integrations beyond Spotify

***

## **3. PROJECT COMPONENTS**
  ### 3.1 Main Webpage
   - SPA with responsive design
   - Integrated Spotify Widget
   - Navigation interface for accessing microservices
  ### 3.2 Activity Microservices
  ##### **DYNAMIC QUIZ GENERATOR**
    * Creates quizzes from JSON data (MVP incl. 1 JSON quiz)
    * Allows selection of quiz topics
    * Tracks and displays user scores
- **Supports multiple question types:**
     * Multiple choice
     * Sliding scale
     * True/False
- **Accommodates various quiz types:**
     * Trivia
     * Personality
     * Knowledge assessment
- **Features:**
     * Randomized question order
     * Result calculation based on quiz type
     * Animated transitions between questions
- **MVP Focus: Spy x Family Anime Personality Quiz**
     * Theme: "Which Spy x Family character are you?"
     * Personality-based questions related to the anime's themes and characters
     * Results mapping to main characters (Loid, Yor, Anya, etc.)
     * Custom artwork or GIFs for results page & primary activity button

#### **PICTURE OF THE DAY: [NAY OF THE DAY / THE NELLY CHRONICLE]**
    * Displays daily randomly-selected image from S3 bucket
    * Ability to adjust pitch/key of individual notes
    * Image information display (image capture date, location)
- **Theme:** Chic Chihuahua Chronicle (newspaper style? 'The Daily Nay')
     * Stylish, playful design elements reflecting Nay Nay's personality
     * Custom illustrations or animations for the reveal sequence
- **MVP Scope:**
     * Daily image selection with user-triggered reveal animation
     * Large database of images featuring Nay Nay in various situations
     * Image information display (image capture date, location)
- **User Interaction:**
     * Prominent "Reveal Today's Nay Nay" button triggers image reveal
     * Animation sequence that builds anticipation before showing the full image

#### **MELODY MAKER: SEWER SYMPHONY**
    * Allows users to create short melodies, insipred by Animal Crossing
    * Provides options for different sounds [Flute, Piano, Farts]
    * Customize pitch of individual notes with realtime playback. 
    
- **Theme:** Sewer Buskers [SEWER RATS or COCKROACHES]
    * Themed background art depicting a swewer or urban underbelly
    * Animated character reactions to the music
- **MVP Scope:**
     * Fixed set of notes (8-bar melody?) that users can manipulate
     * Ability to raise or lower pitch/key of individual notes
     * Three instrument sound options to change the tone color of the entire track:
       - Flute
       - Piano
       - Farts
     * Real-time playback as users modify the tune
     * Option to download the created tune as an audio file
- **User Interface:**
     * Visual representation of notes (e.g., sewer pipes or trash items)
     * Intuitive controls for adjusting pitch and selecting instruments
     * Playback controls (play, pause, reset)

***

## 4. TIMELINE
In the interest of gaining familiarity with working in an agile environment, 
this work will be divided into several two-week sprint cycles. 

### 4.1 Project Phases
- Planning and Design: 2 weeks
- Development: 8 weeks
- Testing and Refinement: 2 weeks
- Total Duration: 12 weeks

### 4.2 Milestones
- **Project Kickoff:** July 15, 2024
- **Design Approval:** July 28, 2024
- **MVP Development Complete:** September 22, 2024
- **Testing and Refinement Complete:** October 6, 2024
- **Project Completion:** October 20, 2024

### 4.3 Development Sprints
| Sprint | Focus Area | Dates |
|--------|------------|-------|
| 1 | Main Page & Spotify Widget | July 29 - August 11, 2024 |
| 2 | Quiz Generator Microservice | August 12 - August 25, 2024 |
| 3 | Picture of the Day Microservice| August 26 - September 8, 2024 |
| 4 | Music Maker Game Microservice| September 9 - September 22, 2024 |

***

## 5. Budget
#### 5.1 Estimated Costs
- AWS Services: [TBD]
- Development Tools: $0 (using free tiers)
- Hosting & Domain: 
- Total Estimated Cost: [TBD] for project duration

#### 5.2 Cost Management
- Monitor AWS usage to stay within free tier limits where possible
- Explore cost-effective alternatives for any paid services

***

## 6. SUCCESS CRITERIA
#### 6.1. **Learning Objectives:**
   ###### Demonstrate proficiency in full-stack web development:
   - Successfully build and integrate both frontend and backend components
   - Identify and document at least three significant challenges overcome during development
   - Implement and explain at least three design patterns used in the project
   ###### Cloud services and API integration:
   - Successfully set up and use AWS S3 for image storage and retrieval
   - Integrate Spotify API, handling authentication and data management
   ###### Database management:
   - Design and implement a database schema for at least one microservice
   - Perform CRUD operations using MongoDB

#### 6.2. **Technical Implementation:**
  - Develop a functional single-page web application that works on desktop and tablet screens
  - Successfully integrate Spotify widget and basic infrastructure for microservices
    ###### Achieve basic performance benchmarks: 
    - Achieve initial page load time under 3 seconds 
    - Smooth interaction with no noticeable lag during normal use

#### 6.3. **Microservices:**
  - Implement basic infrastructure to support three microservices
  - Achieve less than 100ms average response time for inter-service communication
  - Successfully integrate three fully functional microservices into the main application
  - Demonstrate ability to communicate between the main application and microservices

#### 6.4. **User Experience:**
  - At least 3 family members test MVP and provide positive feedback
  - Collect at least 5 specific suggestions for improvements or new features from secondary users
  - Primary user reports satisfaction (at least 8/10) with the MVP functionality and engagement

#### 6.5. **Code Quality and Project Management:**
  - Maintain an updated project backlog and complete at least 3 development sprints
  - Achieve 90% code coverage with unit tests
  - Successfully implement at least one feature using Test-Driven Development (TDD)
  - Complete the MVP within 25% of the estimated timeline
  
#### 6.6. **Documentation:**
  - Create a comprehensive README.md with setup and run instructions
  - Include recorded demo of project in README.md file
  - Document key technical decisions and architecture overview

***

## 7. Project Parameters

#### 7.1. Constraints
- Development limited to open-source technologies and free-tier cloud services
- Must comply with Spotify API terms of service and usage limits
- All content must be age-appropriate for pre-teens
- User interface should be intuitive for young users
- Project to be completed within a 3-month timeframe

#### 7.2. Assumptions
- The project owner can dedicate 20+ hours per week to development
- Spotify API will remain stable and offer sufficient kid-friendly content
- Stakeholders will provide regular, actionable feedback

#### 7.3. Risks and Mitigation Strategies
##### Identified Risks
- Learning curve for new technologies
- Scope creep
- Integration challenges with third-party APIs

##### Mitigation Plans
- Allocate extra time for learning and troubleshooting
- Strictly adhere to defined scope, reassess regularly
- Build flexible wrappers for API integrations

#### 7.4. Quality Assurance
##### Testing Strategy
- Implement unit testing for all critical functions
- Conduct user acceptance testing with primary and secondary users
- Perform cross-browser testing for the web application

##### Performance Benchmarks
- Page load time under 3 seconds
- API response time under 200ms
- 99% uptime for all services

*** 

## 8. Change Management
8.1 Change Request Process
- Document all change requests
- Assess impact on project timeline and scope
- Approve changes only if critical and manageable within constraints

8.2 Impact Assessment
- Evaluate effect on existing features and overall user experience
- Consider implications for learning objectives and skill development

***

## **9. Resources**
#### 9.1 Development Tools
- IDE: Visual Studio Code with ESLint, Prettier, and React extensions
- Version Control: Git, GitHub
- Project Management: JIRA and GitHub Projects
- Communication: Discord (for primary and secondary stakeholders)

##### 9.2 Technology Stack
- Frontend: [TBD]
- Backend: [TBD]
- API: [TBD]
- Testing: [TBD]

##### 9.3 Architecture
The application will follow a microservices architecture, with the main web application serving as a kid-friendly interface for the three activity microservices. Each microservice will be independently deployable and scalable, with a focus on maintaining a safe and educational environment.

##### 9.4 External APIs and Services
- Spotify Web API
- Tone.JS (Music Game microservice)

##### 9.5 Design and Prototyping
- Figma for wireframing and design
- Adobe Creative Suite for asset creation

##### 9.6 Learning Resources
- Documentation: Spotify API, NextJS docs, Tune.JS
- Books: "Clean Code" by Robert C. Martin, [TBD]
- YouTube: [TBD]

##### 9.7 Hosting and Deployment
- Frontend: Vercel
- Backend: [TBD]
- Domain: Porkbun [INSERT RELEVANT LINK HERE]

***

## 10. Future Considerations
#### 10.1 Scalability
- Potential for adding user accounts and data persistence
- Exploring options for handling increased user load

#### 10.2 Potential Enhancements
- Mobile app version
- Additional interactive activities or games
- Enhanced data analytics for user engagement


#### 10.3 POST-MVP Microservice Ideas
1. QUIZ GENERATOR
* Admin interface for creating new quizzes (post-MVP)
* User-generated quiz sharing platform (post-MVP)

2. PICTURE OF THE DAY
* User-generated captions:
    - Allow users to create and submit captions for the daily image
    - Display the most recent or top-voted caption with the image
    - Moderation system for appropriate content (limited words to choose from)
    - Option to view all submitted captions
* Like/React feature for images and captions
* Archive calendar to view past images and their captions
* User-submitted Nay Nay photos (with approval system)
* Weekly or monthly "Best of Nay Nay" compilations featuring top captions
* Seasonal themes or holiday-specific image sets and animations
* Countdown timer until the next day's image becomes available

3. MUSIC MAKER GAME
* Tempo adjustment
* Additional instrument options (pipe organ, drums, saxophone, etc)
* Themed characters that react to the music during playback
* Integration with other activities (e.g., background music for Virtual Pet Simulator)

4. AI COOKING CHALLENGE: [TASTE OF THE FUTURE or AI'D RATHER NOT EAT THAT or RECIPE FOR DISASTER]
   -  Cooking competition game with an AI food critic
   - Users are given three random ingredients and must describe a dish to be made with those ingredients. The AI food critic then decides if your dish was successful or not, and returns a creative reaction to your dish. 
   - **Theme:** TBD
     * TBD
   - **MVP Scope:**
     * TBD
       - TBD
     * TBD
   - **User Interface:**
     * TBD

***

## 11. Personal Commitment Statement
As the sole developer of this project, I commit to dedicating the necessary time and effort to complete this project within the specified timeline. I will approach this as both a learning opportunity and a chance to create something meaningful for my sister. I pledge to maintain high standards of code quality, document my learning process, and seek help when needed to overcome challenges.

    Signed: Elora Hoberecht
    Date: 07/14/2024