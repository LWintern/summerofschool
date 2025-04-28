// /data/courseContent.ts
import DockerImage from '@/assets/docker.png';


export const courseData = [
  {
    id: "flutter-course",
    slug: "flutter-mobile-app-development",
    title: "Flutter Mobile APP Development",
    description: "Build beautiful, high-performance cross-platform apps with Flutter in just 6 Days.\nMaster UI design, API integration, Firebase, and deployment in just 6 Days.\nCreate stunning, scalable apps with Dart, Firebase, and real-world logic.",
    imageSrc: DockerImage,
    time: "10:00 AM",
    duration: "720", // Example total duration (in minutes)
    modules: [
      // --- Module 1 ---
      {
        title: "Module 1: Getting Started with Flutter & Dart Basics",
        sections: [
          {
            subheading: "Introduction to Flutter & Setup",
            points: [
              "What is Flutter? Cross-platform development overview",
              "Flutter architecture and rendering engine",
              "Installing Flutter SDK on Windows/Mac/Linux",
              "Setting up Android Studio & VS Code",
              "Creating your first Flutter project",
              "Understanding the widget tree and Hot Reload"
            ]
          },
          {
            subheading: "Dart Programming Language Essentials",
            points: [
              "Dart syntax: variables, data types, constants",
              "Control structures: if, else, loops, switch-case",
              "Functions, default/named parameters",
              "Object-Oriented Concepts: classes, inheritance, constructors",
              "Null safety in Dart"
            ]
          },
          {
            subheading: "Flutter Core Widgets",
            points: [
              "Stateless vs Stateful Widgets",
              "Using Text, Container, Row, Column, Image, Button",
              "Layout essentials: padding, margin, alignment",
              "Adding fonts and images to pubspec.yaml",
              "Customizing widgets using properties and themes"
            ]
          }
        ]
      },
      // --- Module 2 ---
      {
        title: "Module 2: UI Composition, Navigation & State Management",
        sections: [
          {
            subheading: "Building Responsive UI & Layouts",
            points: [
              "Using Scaffold, AppBar, Drawer, BottomNavigationBar",
              "Understanding Flex, Expanded, and SizedBox",
              "MediaQuery & LayoutBuilder for responsiveness",
              "Organizing widgets with nesting and structure",
              "SafeArea and device-specific considerations"
            ]
          },
          {
            subheading: "Navigation and Routing in Flutter",
            points: [
              "Navigating between screens using Navigator",
              "Named routes and route tables",
              "Passing data between screens",
              "Returning results from screens",
              "Custom transitions and route guards"
            ]
          },
          {
            subheading: "State Management (Beginner Level)",
            points: [
              "Concept of state and its importance",
              "setState() and local state management",
              "Lifting state up across widgets",
              "Introduction to Provider: ChangeNotifier & Consumer",
              "Building a simple reactive UI with Provider"
            ]
          }
        ]
      },
      // --- Module 3 ---
      {
        title: "Module 3: Forms, Inputs, Animations & UI Customization",
        sections: [
          {
            subheading: "Forms and User Input Handling",
            points: [
              "Form widget and FormState",
              "Working with TextField, Checkbox, Radio, Switch",
              "Form validation logic and error handling",
              "DatePicker and TimePicker dialogs",
              "Custom input widgets and focus handling"
            ]
          },
          {
            subheading: "Animations in Flutter",
            points: [
              "Implicit animations: AnimatedContainer, AnimatedOpacity, AnimatedAlign",
              "Introduction to AnimationController and Tween",
              "CurvedAnimation for smoother transitions",
              "Hero animations for screen navigation",
              "AnimatedBuilder and Reusable animation logic"
            ]
          },
          {
            subheading: "Theming and Reusable UI Components",
            points: [
              "ThemeData and color schemes",
              "Dark mode implementation",
              "Custom Fonts and Icon themes",
              "Extracting widgets and reusability patterns",
              "Creating project-wide UI consistency"
            ]
          }
        ]
      },
      // --- Module 4 ---
      {
        title: "Module 4: Networking, REST API & Local Storage",
        sections: [
          {
            subheading: "RESTful API Integration",
            points: [
              "Using the http package in Flutter",
              "Performing GET, POST, PUT, DELETE operations",
              "JSON parsing and mapping to Dart model classes",
              "Showing progress indicators and error messages",
              "Error handling and retry logic"
            ]
          },
          {
            subheading: "Local Data Storage",
            points: [
              "SharedPreferences for key-value data",
              "Introduction to SQLite in Flutter using sqflite",
              "Creating, reading, updating, deleting records in SQLite",
              "Using path_provider for file storage",
              "Offline-first strategy with local caching"
            ]
          },
          {
            subheading: "Advanced Provider for Data Handling",
            points: [
              "Building scalable data architecture with Provider",
              "Creating global state containers",
              "Asynchronous state updates and loading states",
              "Separating logic from UI for maintainability"
            ]
          }
        ]
      },
      // --- Module 5 ---
      {
        title: "Module 5: Firebase Integration & Native Features",
        sections: [
          {
            subheading: "Firebase Project Setup and Authentication",
            points: [
              "Setting up Firebase project and integrating with Flutter",
              "Firebase SDK setup and configuration (Android & iOS)",
              "Email/Password Authentication",
              "Google Sign-In Integration",
              "Session handling and logout"
            ]
          },
          {
            subheading: "Firestore Database in Flutter",
            points: [
              "Introduction to Firestore (vs Realtime DB)",
              "Performing CRUD operations with Firestore",
              "Displaying real-time data using StreamBuilder",
              "Structuring collections and documents",
              "Firestore security rules overview"
            ]
          },
          {
            subheading: "Accessing Native Device Features",
            points: [
              "Image picker for camera/gallery access",
              "File picker and permission handling",
              "Location and Geolocation features",
              "Displaying Google Maps in Flutter",
              "Using platform-specific plugins"
            ]
          }
        ]
      },
      // --- Module 6 ---
      {
        title: "Module 6: Testing, Debugging, Deployment & Final Touches",
        sections: [
          {
            subheading: "Testing & Debugging in Flutter",
            points: [
              "Debugging techniques and breakpoints",
              "Logging with print and debugPrint",
              "Widget testing and unit testing with test package",
              "Integration testing overview",
              "Performance optimization tips"
            ]
          },
          {
            subheading: "Building and Releasing Flutter Apps",
            points: [
              "Building APK, AAB files for Android",
              "Code signing and versioning",
              "App Icons and Splash Screens",
              "iOS deployment overview (for Mac users)",
              "Publishing apps to the Play Store (step-by-step)"
            ]
          }
        ]
      }
    ]
  }
  // ...other courses if any
];