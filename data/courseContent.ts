// /data/courseContent.ts
// If your image is in a local assets folder
const DockerImage = "/assets/docker.png";


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
  },

  {
    id: "python-programming-problem-solving",
    slug: "problem-solving-with-python-programming-and-data-structures",
    title: "Problem Solving with Python Programming & Data Structures",
    description: "Join. Learn. Solve problems. Crack tech interviews. Build strong logic, master coding rounds, and land the job. Real skills. Real problems. Real confidence. Code smart. Think sharp. Get hired.",
    imageSrc: DockerImage,
    time: "10:00 AM",
    duration: "1080", // Example total duration (in minutes)
    modules: [
      // --- Module 1 ---
      {
        title: "Module 1: Programming Fundamentals and Python Basics",
        sections: [
          {
            subheading: "Introduction to Programming",
            points: [
              "What is programming?",
              "Importance of programming in real-world applications",
              "Why choose Python for problem-solving?",
              "Interpreted vs Compiled Languages"
            ]
          },
          {
            subheading: "Python Basics",
            points: [
              "Python syntax and semantics",
              "Variables, Constants, Data Types",
              "Operators (Arithmetic, Relational, Logical, Bitwise)",
              "Type casting and expressions"
            ]
          },
          {
            subheading: "Control Flow in Python",
            points: [
              "Conditional Statements (if, elif, else)",
              "Loops (for, while)",
              "Loop control statements (break, continue, pass)",
              "Loop nesting and common logic patterns"
            ]
          },
          {
            subheading: "Functions and Modular Code",
            points: [
              "Defining and calling functions",
              "Function arguments and return values",
              "Variable scope and lifetime",
              "Lambda functions, map, filter, reduce"
            ]
          },
          {
            subheading: "Simple Problem Solving",
            points: [
              "Prime check, factorial, palindrome check, digit sum, etc.",
              "Introduction to dry run and flowcharts"
            ]
          }
        ]
      },
      // --- Module 2 ---
      {
        title: "Module 2: Core Python and Algorithmic Thinking",
        sections: [
          {
            subheading: "Working with Strings and Lists",
            points: [
              "String operations, slicing, searching",
              "List operations, list comprehensions, nested lists"
            ]
          },
          {
            subheading: "Tuples, Sets, and Dictionaries",
            points: [
              "Tuples: immutability and use cases",
              "Sets: operations, removing duplicates, set algebra",
              "Dictionaries: key-value pairs, common operations"
            ]
          },
          {
            subheading: "Recursion Fundamentals",
            points: [
              "What is recursion?",
              "Base case and recursive case",
              "Recursive examples: factorial, Fibonacci",
              "Stack memory and limitations of recursion"
            ]
          },
          {
            subheading: "Introduction to Problem Solving Techniques",
            points: [
              "Brute-force vs optimized solution",
              "Time complexity basics (Big O notation)",
              "Algorithmic problem types and patterns",
              "Two Pointers, Sliding Window techniques"
            ]
          }
        ]
      },
      // --- Module 3 ---
      {
        title: "Module 3: Data Structures I – Arrays, Stacks, Queues",
        sections: [
          {
            subheading: "Arrays in Python",
            points: [
              "Static vs dynamic arrays",
              "Searching (linear, binary)",
              "Sorting algorithms: Bubble, Selection, Insertion",
              "Prefix sums and subarray problems"
            ]
          },
          {
            subheading: "Stack Data Structure",
            points: [
              "Stack using list and deque",
              "Applications: Expression evaluation, balancing brackets",
              "Next greater element problem"
            ]
          },
          {
            subheading: "Queue Data Structure",
            points: [
              "Queue using list and collections.deque",
              "Circular queue concepts",
              "Double-ended queue (deque)",
              "Queue using two stacks"
            ]
          },
          {
            subheading: "Problem Solving Using Stack and Queue",
            points: [
              "Parentheses validation, Min stack",
              "First non-repeating character in a stream",
              "Rotting oranges, sliding window maximum"
            ]
          }
        ]
      },
      // --- Module 4 ---
      {
        title: "Module 4: Data Structures II – Linked Lists, Hashing, Recursion",
        sections: [
          {
            subheading: "Linked Lists",
            points: [
              "Node and pointer concepts",
              "Singly, doubly, and circular linked lists",
              "Common operations: insert, delete, reverse",
              "Detecting and removing loops (Floyd’s cycle detection)"
            ]
          },
          {
            subheading: "Hashing in Python",
            points: [
              "Hash tables, dictionaries",
              "Hash functions and collision handling",
              "Frequency counters and counting problems",
              "Applications: Anagrams, subarray sum problems"
            ]
          },
          {
            subheading: "Advanced Recursion and Backtracking",
            points: [
              "Generating permutations, combinations",
              "Subset sum, N-Queens problem",
              "Backtracking strategy and tree recursion"
            ]
          },
          {
            subheading: "Optimization Techniques",
            points: [
              "Time complexity analysis",
              "Memoization and dynamic cache",
              "Python memory model"
            ]
          }
        ]
      },
      // --- Module 5 ---
      {
        title: "Module 5: Trees, Heaps, and Graph Theory Basics",
        sections: [
          {
            subheading: "Trees",
            points: [
              "Binary trees, binary search trees",
              "Tree traversal techniques (inorder, preorder, postorder)",
              "Insertion, deletion in BST",
              "Height, diameter, leaf nodes, mirroring a tree"
            ]
          },
          {
            subheading: "Heaps and Priority Queues",
            points: [
              "Min-heap and max-heap",
              "Implementing heap using list and heapq",
              "Applications: Top K elements, heap sort"
            ]
          },
          {
            subheading: "Graph Theory Basics",
            points: [
              "Graph representation: Adjacency list and matrix",
              "Breadth-First Search (BFS), Depth-First Search (DFS)",
              "Cycle detection in undirected and directed graphs",
              "Connected components, graph coloring basics"
            ]
          },
          {
            subheading: "Revisiting Problem-Solving Patterns",
            points: [
              "Greedy algorithms overview",
              "Revisiting sliding window, two pointers, frequency maps"
            ]
          }
        ]
      },
      // --- Module 6 ---
      {
        title: "Module 6: Dynamic Programming and Final Interview Preparation",
        sections: [
          {
            subheading: "Introduction to Dynamic Programming (DP)",
            points: [
              "Need for DP: overlapping subproblems and optimal substructure",
              "Memoization vs Tabulation",
              "Classic DP problems: Fibonacci, 0/1 Knapsack, Coin change"
            ]
          },
          {
            subheading: "Advanced Problem Solving and Patterns",
            points: [
              "Longest increasing subsequence, subset sum, edit distance",
              "DP on strings, DP on grids",
              "State transition diagrams and table formulation"
            ]
          },
          {
            subheading: "Coding Interview Preparation",
            points: [
              "Problem reading and analysis strategies",
              "Thinking in steps: logic and dry runs",
              "Space/time tradeoffs, code optimization"
            ]
          },
          {
            subheading: "Career Preparation and Placement Support",
            points: [
              "Resume building tips for programmers",
              "GitHub and LeetCode profile enhancement",
              "Preparing for online assessments",
              "Behavioral and HR interview questions"
            ]
          }
        ]
      }
    ]
  },
// /data/courseContent.ts
// If your image is in a local assets folder

  {
    id: "linux-security-networking-master",
    slug: "linux-security-networking-open-source-mastery",
    title: "Linux Security, Networking & Open Source Mastery",
    subtitle: "Focused technical training for real-world server security and system integrity. A holistic track for mastering secure, networked Linux infrastructure. Industry-grade training for aspiring Linux engineers and cybersecurity professionals.",
    imageSrc: DockerImage,
    time: "10:00 AM",
    duration: "1080", // Example total duration (in minutes)
    modules: [
      // --- Module 1 ---
      {
        title: "Module 1: Linux Fundamentals & RHEL Basics",
        sections: [
          {
            subheading: "Introduction to Linux & Shell Environment",
            points: [
              "History and significance of Linux",
              "What is RHEL? RHEL vs CentOS vs Fedora",
              "Linux desktop vs server environments",
              "Understanding the shell and terminal",
              "Essential commands: ls, cd, pwd, cp, mv, rm, touch, mkdir",
              "Standard Linux directory layout (FHS): /etc, /home, /var, /bin, /usr, /root"
            ]
          },
          {
            subheading: "File Permissions & Basic User Administration",
            points: [
              "File ownership and permission model: chmod, chown, umask",
              "Numeric and symbolic mode",
              "Creating and managing users: useradd, passwd, usermod",
              "Groups and group membership: groupadd, gpasswd, /etc/group",
              "Special permissions: Sticky bit, SUID, SGID",
              "Default permissions and shared folder access scenarios"
            ]
          },
          {
            subheading: "Filesystem and Boot Process",
            points: [
              "Partitioning concepts: MBR vs GPT",
              "Mounting and unmounting: mount, umount, blkid, /etc/fstab",
              "Logical Volume Management (LVM) structure: PV → VG → LV",
              "RHEL Boot process: BIOS/UEFI → GRUB2 → Kernel → initrd → systemd",
              "System targets: multi-user.target, graphical.target",
              "Managing boot entries using grub2-mkconfig, grubby"
            ]
          }
        ]
      },
      // --- Module 2 ---
      {
        title: "Module 2: Software Management, Basic Networking, and Firewall",
        sections: [
          {
            subheading: "Software and Updates",
            points: [
              "RPM package structure and format",
              "Using dnf to install, remove, update packages",
              "Querying installed packages, resolving dependencies",
              "Enabling/disabling software repositories",
              "GPG signature validation of packages",
              "Working with module streams"
            ]
          },
          {
            subheading: "Linux Networking Basics",
            points: [
              "IP addressing: static vs dynamic (DHCP)",
              "Subnet, gateway, and DNS overview",
              "Viewing and configuring interfaces: ip, nmcli, nmtui",
              "Editing configuration files for persistent settings",
              "Hostname and name resolution: /etc/hosts, DNS settings",
              "Tools: ping, curl, traceroute, netstat, ss"
            ]
          },
          {
            subheading: "Firewalld in RHEL",
            points: [
              "What is firewalld? Comparison with iptables",
              "Zones, services, ports",
              "Adding interfaces to zones",
              "Opening/closing ports",
              "Setting permanent vs runtime rules",
              "Understanding rich rules and ICMP filtering"
            ]
          }
        ]
      },
      // --- Module 3 ---
      {
        title: "Module 3: Advanced User Security, Logging, and SELinux Basics",
        sections: [
          {
            subheading: "Advanced User Management & sudo",
            points: [
              "Understanding /etc/passwd, /etc/shadow, /etc/group",
              "Password policies: expiry, complexity (chage, PAM)",
              "Disabling and locking accounts",
              "sudo configuration: visudo, privilege delegation",
              "Secure shell (SSH) access: .ssh/authorized_keys, sshd_config"
            ]
          },
          {
            subheading: "Logging & Monitoring",
            points: [
              "Journald and log files: journalctl, rsyslog",
              "Log file locations and interpretation: /var/log/messages, /var/log/secure, /var/log/dnf.log",
              "Configuring logrotate for custom log rotation and archival",
              "Setting up remote log forwarding"
            ]
          },
          {
            subheading: "SELinux Fundamentals",
            points: [
              "What is SELinux?",
              "SELinux modes: enforcing, permissive, disabled",
              "Label types: user, role, type, level",
              "Viewing and changing contexts: ls -Z, chcon, restorecon",
              "Understanding and setting booleans: getsebool, setsebool",
              "Debugging access denials using audit2allow"
            ]
          }
        ]
      },
      // --- Module 4 ---
      {
        title: "Module 4: Intermediate Networking, Encryption, and Secure Remote Access",
        sections: [
          {
            subheading: "Intermediate Networking (Bonding, VLANs)",
            points: [
              "NIC naming in RHEL (enp0s3, etc.)",
              "Static IP configuration with nmcli and config files",
              "NIC bonding modes: active-backup, balance-rr",
              "VLAN tagging on RHEL",
              "Bridge interfaces for KVM and containers"
            ]
          },
          {
            subheading: "LUKS Encryption and Secure Storage",
            points: [
              "LUKS and dm-crypt overview",
              "Encrypting partitions using cryptsetup",
              "Mounting and auto-decrypting encrypted volumes",
              "Key management and passphrase recovery",
              "Use cases: laptops, removable drives, data-at-rest security"
            ]
          },
          {
            subheading: "SSH Hardening",
            points: [
              "Key-based authentication",
              "Managing sshd_config for security: Disabling root login",
              "Allowing only specific users/groups",
              "Limiting connection attempts, idle timeout",
              "Port change and fail2ban concept"
            ]
          }
        ]
      },
      // --- Module 5 ---
      {
        title: "Module 5: Linux Security Policies, Compliance & Threat Prevention",
        sections: [
          {
            subheading: "System Hardening Techniques",
            points: [
              "Disable unused services and ports",
              "Secure /tmp, /var/tmp, /dev/shm",
              "File permission tightening",
              "Restricting cron, at, and su access",
              "Kernel parameter hardening via /etc/sysctl.conf"
            ]
          },
          {
            subheading: "Audit Framework and File Integrity",
            points: [
              "Overview of auditd",
              "Creating audit rules for file access, execution, and permission changes",
              "Using ausearch, aureport, and auditctl",
              "Installing and configuring AIDE (Advanced Intrusion Detection Environment)",
              "AIDE database initialization, check, and update process"
            ]
          },
          {
            subheading: "RHEL Compliance Tools and CVE Awareness",
            points: [
              "Red Hat Insights overview",
              "CVE database and patch impact assessment",
              "Manual remediation of vulnerable packages using dnf",
              "Compliance standards (PCI-DSS, CIS, STIG) – basic concepts",
              "Using oscap to evaluate system compliance (OpenSCAP)"
            ]
          }
        ]
      },
      // --- Module 6 ---
      {
        title: "Module 6: Container Security (Podman) & Secure Communication",
        sections: [
          {
            subheading: "Rootless Containers with Podman",
            points: [
              "Introduction to containers and isolation",
              "Podman vs Docker security benefits",
              "Rootless container execution and user namespace",
              "Managing container images, volumes, and network settings",
              "Podman and systemd integration"
            ]
          },
          {
            subheading: "Network Monitoring & Diagnostics",
            points: [
              "Monitoring tools: netstat, ss, lsof, ip",
              "tcpdump for packet capture",
              "Network scanning and vulnerability testing using nmap",
              "Detecting and analyzing rogue traffic"
            ]
          },
          {
            subheading: "VPN, Secure Tunneling & Final Wrap-up",
            points: [
              "VPN types: SSL, IPSec, WireGuard",
              "WireGuard VPN basics and configuration",
              "Use case: Secure remote access to internal Linux server",
              "Best practices checklist for RHEL security and networking"
            ]
          }
        ]
      }
    ]
  },

  {
    id: "mongodb-modern-applications-no-sql",
    slug: "mongodb-for-modern-applications-the-nosql-edge",
    title: "MongoDB for Modern Applications: The NoSQL Edge",
    subtitle: "Dive deep into NoSQL with real-time use cases, CRUD ops, and performance tuning in just 2 days. Learn to model, index, and query data like a pro — fast, flexible, and production-ready. Hands-on with real projects, replica sets, and best practices for high availability.",
    imageSrc: DockerImage,
    time: "10:00 AM",
    duration: "1200", // Example total duration (in minutes) for a 2-day course
    modules: [
      // --- Module 1 ---
      {
        title: "Module 1: Introduction to MongoDB & NoSQL",
        sections: [
          {
            subheading: "What is MongoDB and Why NoSQL?",
            points: [
              "MongoDB vs. RDBMS: Key differences",
              "When to choose MongoDB",
              "JSON, BSON, and Document-Oriented Databases",
              "Installing MongoDB on Linux/Windows",
              "MongoDB Compass GUI Overview",
              "Connecting to the MongoDB Shell"
            ]
          }
        ]
      },
      // --- Module 2 ---
      {
        title: "Module 2: MongoDB Architecture Overview",
        sections: [
          {
            subheading: "MongoDB Deployment Types",
            points: [
              "Standalone, Replica Set, Sharded Cluster",
              "Documents, Collections, and Databases",
              "Data Types in BSON",
              "Understanding ObjectIds"
            ]
          }
        ]
      },
      // --- Module 3 ---
      {
        title: "Module 3: CRUD Operations in MongoDB",
        sections: [
          {
            subheading: "Creating Databases and Collections",
            points: [
              "Insert: insertOne(), insertMany()",
              "Read: find(), findOne(), Query Operators",
              "Update: updateOne(), updateMany(), $set, $inc, etc.",
              "Delete: deleteOne(), deleteMany()",
              "Filtering, Projection, and Pagination"
            ]
          }
        ]
      },
      // --- Module 4 ---
      {
        title: "Module 4: Indexing & Query Optimization",
        sections: [
          {
            subheading: "Types of Indexes",
            points: [
              "Single field, compound, unique",
              "Creating and Dropping Indexes",
              "Impact of Indexes on Performance",
              "Query Plan Analysis with .explain()",
              "Covered Queries and Index Selection"
            ]
          }
        ]
      },
      // --- Module 5 ---
      {
        title: "Module 5: Data Modeling & Schema Design",
        sections: [
          {
            subheading: "Embedded vs. Referenced Documents",
            points: [
              "Schema Design Patterns",
              "Designing for Reads vs Writes",
              "One-to-Many, One-to-One, Many-to-Many patterns"
            ]
          }
        ]
      },
      // --- Module 6 ---
      {
        title: "Module 6: MongoDB Aggregation Framework",
        sections: [
          {
            subheading: "Introduction to Pipelines and Aggregation",
            points: [
              "$match, $group, $project, $sort, $limit, $skip",
              "$lookup for Joins in MongoDB",
              "$unwind, $addFields, $count, $bucket",
              "Real-world data analysis examples using Aggregation"
            ]
          }
        ]
      },
      // --- Module 7 ---
      {
        title: "Module 7: Working with Relationships & Transactions",
        sections: [
          {
            subheading: "Normalization vs. Denormalization",
            points: [
              "Implementing One-to-Many and Many-to-Many",
              "Transactions in MongoDB (multi-document)",
              "session.startTransaction() and rollback"
            ]
          }
        ]
      },
      // --- Module 8 ---
      {
        title: "Module 8: Data Validation, Backup, and Import/Export",
        sections: [
          {
            subheading: "Schema Validation with JSON Schema",
            points: [
              "mongoimport, mongoexport, mongodump, mongorestore",
              "Using validate() and setting collection rules"
            ]
          }
        ]
      },
      // --- Module 9 ---
      {
        title: "Module 9: MongoDB Security & User Roles",
        sections: [
          {
            subheading: "MongoDB Authentication",
            points: [
              "SCRAM, x.509",
              "Role-Based Access Control (RBAC)",
              "Creating users and assigning roles",
              "IP Whitelisting & TLS/SSL basics",
              "Security Best Practices"
            ]
          }
        ]
      },
      // --- Module 10 ---
      {
        title: "Module 10: Real-World Integration & Tools",
        sections: [
          {
            subheading: "MongoDB with Python using PyMongo",
            points: [
              "MongoDB with Node.js (Mongoose)",
              "Atlas Overview (Cloud MongoDB)",
              "Monitoring MongoDB using Atlas or Compass"
            ]
          }
        ]
      }
    ]
  },

  {
    id: "enterprise-cloud-computing-with-aws",
    slug: "enterprise-cloud-computing-with-aws",
    title: "Enterprise Cloud Computing with AWS",
    subtitle: "Begin your cloud journey with AWS, the world’s leading cloud platform. Build, secure, and scale real-world applications across compute, storage, and networking.",
    imageSrc: DockerImage,
    time: "10:00 AM",
    duration: "1200", // Example total duration (in minutes) for the full course
    modules: [
      // --- Module 1 ---
      {
        title: "Module 1: Introduction to Cloud & AWS Essentials",
        sections: [
          {
            subheading: "What is Cloud Computing?",
            points: [
              "IaaS, PaaS, SaaS Explained",
              "AWS Global Infrastructure: Regions, AZs, Edge Locations",
              "Overview of AWS Console and CLI",
              "Shared Responsibility Model",
              "AWS Free Tier, Billing Dashboard"
            ]
          }
        ]
      },
      // --- Module 2 ---
      {
        title: "Module 2: Identity and Access Management (IAM)",
        sections: [
          {
            subheading: "Users, Groups, Roles, and Permissions",
            points: [
              "IAM Best Practices and MFA",
              "Creating Custom Policies",
              "Identity Federation and Role Switching"
            ]
          }
        ]
      },
      // --- Module 3 ---
      {
        title: "Module 3: Compute Services – EC2 Deep Dive",
        sections: [
          {
            subheading: "Launching EC2 Instances",
            points: [
              "AMIs, Key Pairs, Instance Types",
              "Security Groups and Elastic IPs",
              "SSH Access and User Data Scripts"
            ]
          }
        ]
      },
      // --- Module 4 ---
      {
        title: "Module 4: Storage Services – S3, EBS & EFS",
        sections: [
          {
            subheading: "Amazon S3: Buckets, Objects, Versioning, Lifecycle Rules",
            points: [
              "EBS Volumes, Snapshots, Volume Types",
              "EFS for Shared File Systems",
              "Access Permissions and Encryption"
            ]
          }
        ]
      },
      // --- Module 5 ---
      {
        title: "Module 5: Virtual Private Cloud (VPC) & Networking",
        sections: [
          {
            subheading: "Subnets, Route Tables, Internet/NAT Gateways",
            points: [
              "Security Groups vs NACLs",
              "VPC Peering, PrivateLink, and VPN Overview",
              "DNS with Route 53 Basics"
            ]
          }
        ]
      },
      // --- Module 6 ---
      {
        title: "Module 6: Monitoring, Logs, and Billing Tools",
        sections: [
          {
            subheading: "CloudWatch Metrics, Alarms, Dashboards",
            points: [
              "CloudTrail for API Monitoring",
              "Cost Explorer and Billing Alerts",
              "Trusted Advisor and Budgets"
            ]
          }
        ]
      },
      // --- Module 7 ---
      {
        title: "Module 7: Load Balancing and Auto Scaling",
        sections: [
          {
            subheading: "Application, Network, and Classic Load Balancers",
            points: [
              "Target Groups and Health Checks",
              "Launch Templates, Auto Scaling Policies",
              "High Availability Architecture Setup"
            ]
          }
        ]
      },
      // --- Module 8 ---
      {
        title: "Module 8: AWS Lambda & Serverless Fundamentals",
        sections: [
          {
            subheading: "Function as a Service (FaaS) Overview",
            points: [
              "Creating Lambda Functions and Triggers",
              "Permissions with IAM and Resource Policies",
              "Connecting Lambda to API Gateway"
            ]
          }
        ]
      },
      // --- Module 9 ---
      {
        title: "Module 9: Database Services – RDS and Aurora",
        sections: [
          {
            subheading: "RDS Engines (MySQL, PostgreSQL, MariaDB)",
            points: [
              "Snapshots, Backups, Multi-AZ Deployment",
              "Aurora Overview and Serverless Mode",
              "Connecting RDS to Applications"
            ]
          }
        ]
      },
      // --- Module 10 ---
      {
        title: "Module 10: CloudFront and Global Distribution",
        sections: [
          {
            subheading: "CDN Basics with Amazon CloudFront",
            points: [
              "Configuring CloudFront with S3",
              "Caching Policies and TTL",
              "Using CloudFront with Route 53"
            ]
          }
        ]
      },
      // --- Module 11 ---
      {
        title: "Module 11: Containers & DevOps Tools",
        sections: [
          {
            subheading: "Docker Basics and ECS Overview",
            points: [
              "ECS Clusters, Fargate vs EC2 Mode",
              "CI/CD with CodePipeline, CodeBuild, CodeDeploy",
              "CodeCommit Integration with GitHub"
            ]
          }
        ]
      },
      // --- Module 12 ---
      {
        title: "Module 12: Infrastructure as Code with CloudFormation",
        sections: [
          {
            subheading: "YAML vs JSON Templates",
            points: [
              "Stacks and Resource Creation",
              "Parameters, Mappings, Outputs",
              "Stack Updates and Drift Detection"
            ]
          }
        ]
      },
      // --- Module 13 ---
      {
        title: "Module 13: Systems Manager (SSM) & Automation",
        sections: [
          {
            subheading: "SSM Agent and Session Manager",
            points: [
              "Automation Documents and Run Command",
              "Secrets Manager and Parameter Store",
              "Remote Management Without SSH"
            ]
          }
        ]
      },
      // --- Module 14 ---
      {
        title: "Module 14: AWS Security, WAF & Compliance",
        sections: [
          {
            subheading: "Data Protection with KMS, Encryption Keys",
            points: [
              "Security Hub, GuardDuty, Macie Overview",
              "AWS WAF and Shield (DDoS Protection)",
              "AWS Artifact and Compliance Reports"
            ]
          }
        ]
      },
      // --- Module 15 ---
      {
        title: "Module 15: High Availability, Disaster Recovery",
        sections: [
          {
            subheading: "Multi-AZ vs Multi-Region Design",
            points: [
              "Backup & Restore, Active-Passive DR Models"
            ]
          }
        ]
      }
    ]
  },

  {
    id: "machine-learning-deep-learning-real-world-intelligence",
    slug: "machine-learning-deep-learning-real-world-intelligence",
    title: "Machine Learning & Deep Learning for Real-World Intelligence",
    subtitle: "Master AI with real-world ML and Deep Learning tools using Python, TensorFlow, and Keras. Build, train, and deploy intelligent systems using scalable ML/DL frameworks. Learn to model smart applications with supervised learning, CNNs, and RNNs. Build AI solutions that learn, adapt, and scale from data to deployment.",
    imageSrc: DockerImage,
    time: "10:00 AM",
    duration: "1500", // Example total duration (in minutes) for the full course
    modules: [
      // --- Module 1 ---
      {
        title: "Module 1: Introduction to Machine Learning & Python for ML",
        sections: [
          {
            subheading: "What is Machine Learning and Why Does it Matter",
            points: [
              "History and Evolution of ML",
              "Supervised vs. Unsupervised Learning",
              "ML in Real Life: Industry Use Cases (Finance, Healthcare, Retail, Manufacturing)",
              "Setting up Python Environment (Anaconda, Jupyter, Colab)",
              "Python Basics for ML: Data Types, Control Structures, Functions",
              "Libraries Overview: NumPy, Pandas, Matplotlib, Seaborn",
              "Data Cleaning: Handling Missing Values, Duplicates, Outliers",
              "Exploratory Data Analysis (EDA)"
            ]
          }
        ]
      },
      // --- Module 2 ---
      {
        title: "Module 2: Regression & Classification Techniques",
        sections: [
          {
            subheading: "Understanding Supervised Learning",
            points: [
              "Simple and Multiple Linear Regression",
              "Regularization Techniques: Ridge, Lasso, ElasticNet",
              "Logistic Regression for Binary and Multiclass Problems",
              "Decision Trees and Ensemble Methods (Bagging, Random Forest, XGBoost)",
              "K-Nearest Neighbors (KNN)",
              "Model Evaluation: Accuracy, Precision, Recall, F1 Score, ROC-AUC",
              "Confusion Matrix, Classification Reports",
              "Cross-Validation, Stratified K-Folds"
            ]
          }
        ]
      },
      // --- Module 3 ---
      {
        title: "Module 3: Unsupervised Learning & Feature Engineering",
        sections: [
          {
            subheading: "Introduction to Unsupervised Learning",
            points: [
              "K-Means Clustering: Centroids, Inertia, Elbow Method",
              "Hierarchical Clustering: Dendrograms, Linkage Criteria",
              "DBSCAN for Density-Based Clustering",
              "Principal Component Analysis (PCA): Eigenvalues, Explained Variance",
              "t-SNE and UMAP for Visualization",
              "Feature Scaling: StandardScaler, MinMaxScaler, RobustScaler",
              "One-Hot Encoding, Label Encoding, Target Encoding",
              "Handling High-Dimensional Data"
            ]
          }
        ]
      },
      // --- Module 4 ---
      {
        title: "Module 4: Deep Learning & Neural Network Basics",
        sections: [
          {
            subheading: "Introduction to Neural Networks",
            points: [
              "Difference Between ML and DL",
              "Biological Neuron vs Artificial Neuron",
              "Activation Functions: ReLU, Sigmoid, Tanh, Softmax",
              "Loss Functions: MSE, Cross-Entropy",
              "Introduction to TensorFlow & Keras APIs",
              "Creating a Feedforward Neural Network",
              "Weight Initialization and Forward Propagation",
              "Backpropagation and Gradient Descent",
              "Model Compilation, Training, Evaluation, and Inference"
            ]
          }
        ]
      },
      // --- Module 5 ---
      {
        title: "Module 5: CNNs, RNNs, and Optimization",
        sections: [
          {
            subheading: "Introduction to Convolutional Neural Networks (CNNs)",
            points: [
              "Convolution Layers, Pooling (Max/Avg), Flatten Layers",
              "Building Image Classifiers using CNN (MNIST, CIFAR-10)",
              "Data Augmentation Techniques (Flip, Rotate, Zoom)",
              "Batch Normalization and Dropout for Regularization",
              "Transfer Learning: VGG16, ResNet, MobileNet",
              "Visualizing CNN Filters and Feature Maps"
            ]
          },
          {
            subheading: "Introduction to Recurrent Neural Networks (RNNs)",
            points: [
              "Sequence Data and Time Series Modeling",
              "Vanishing Gradient Problem",
              "LSTM and GRU: Architecture, Gates, Cell States",
              "Text Classification and Sentiment Analysis with RNNs",
              "Embedding Layers and Word Embeddings (Word2Vec, GloVe)",
              "Attention Mechanisms: Concept and Applications",
              "Overview of Transformer Architecture and BERT"
            ]
          }
        ]
      },
      // --- Module 6 ---
      {
        title: "Module 6: Model Deployment & Career Preparation",
        sections: [
          {
            subheading: "Model Serialization and Deployment",
            points: [
              "Model Serialization: Pickle, Joblib, Keras Save/Load",
              "Creating REST APIs with Flask for ML Model Deployment",
              "Introduction to Streamlit for Data Science Dashboards",
              "Docker Basics for ML Applications",
              "Model Versioning and Experiment Tracking",
              "Basics of CI/CD in ML using GitHub Actions."
            ]
          },
          {
            subheading: "Career Paths in AI",
            points: [
              "Career Paths: ML Engineer, DL Engineer, Data Scientist"
            ]
          }
        ]
      }
    ]
  }
,

  {
    id: "advanced-devops-tools-infrastructure-automation",
    slug: "advanced-devops-tools-infrastructure-automation",
    title: "Advanced DevOps Tools and Infrastructure Automation Training",
    subtitle: "Build, Deploy, Automate, Monitor, and Scale Applications in Production Environments. Streamline Software Delivery with GitOps, Containerization, Configuration Management, and Real-Time Monitoring Workflows. Build Scalable, Automated Software Systems with Jenkins, Docker, Kubernetes, Argo CD, and Terraform.",
    imageSrc: DockerImage,
    time: "10:00 AM",
    duration: "1800", // Example total duration (in minutes) for the full course
    modules: [
      // --- Module 1 ---
      {
        title: "Module 1: DevOps Fundamentals and Linux Essentials",
        sections: [
          {
            subheading: "Introduction to DevOps Philosophy",
            points: [
              "Principles",
              "CALMS Model (Culture, Automation, Lean, Measurement, Sharing)"
            ]
          },
          {
            subheading: "Traditional Development vs DevOps Approach",
            points: []
          },
          {
            subheading: "DevOps Lifecycle Overview",
            points: [
              "Plan",
              "Develop",
              "Build",
              "Test",
              "Release",
              "Deploy",
              "Operate",
              "Monitor"
            ]
          },
          {
            subheading: "Understanding CI/CD and Infrastructure as Code (IaC) in DevOps",
            points: []
          },
          {
            subheading: "Linux Essentials for DevOps",
            points: [
              "File System Navigation, User and Group Management",
              "Permissions, Ownership, and Process Control",
              "Network Troubleshooting Tools (ping, netstat, ifconfig, traceroute)",
              "Shell Scripting Basics for Automation",
              "Understanding Systemd, Cron Jobs, and Service Management"
            ]
          },
          {
            subheading: "Git Introduction",
            points: [
              "Git Basics (Clone, Commit, Push, Pull, Merge)",
              "Branching, Merging, and Conflict Resolution",
              "Git Workflows (Feature Branch, GitFlow, Trunk-Based Development)",
              "GitHub Usage for Team Collaboration and Code Management"
            ]
          }
        ]
      },
      // --- Module 2 ---
      {
        title: "Module 2: Containerization with Docker and Build Automation with Jenkins",
        sections: [
          {
            subheading: "Introduction to Containers and Microservices Architecture",
            points: []
          },
          {
            subheading: "Docker Architecture",
            points: [
              "Docker Daemon",
              "Client",
              "Images",
              "Containers",
              "Volumes",
              "Networks"
            ]
          },
          {
            subheading: "Dockerfile Deep Dive",
            points: [
              "Creating and Optimizing Custom Images"
            ]
          },
          {
            subheading: "Docker Compose for Multi-Container Applications",
            points: []
          },
          {
            subheading: "Best Practices for Docker Image Security and Optimization",
            points: []
          },
          {
            subheading: "Introduction to Continuous Integration (CI)",
            points: [
              "Concepts of Automated Builds and Test Pipelines"
            ]
          },
          {
            subheading: "Jenkins Architecture",
            points: [
              "Master-Agent Model",
              "Plugins",
              "Security Management"
            ]
          },
          {
            subheading: "Setting up Jenkins Pipelines",
            points: [
              "Freestyle Jobs vs Declarative Pipelines",
              "Pipeline Syntax and Stages (Build, Test, Deploy)",
              "Pipeline Integrations with GitHub",
              "Managing Jenkins Credentials, Secrets, and Secure Configuration"
            ]
          }
        ]
      },
      // --- Module 3 ---
      {
        title: "Module 3: Kubernetes Orchestration and Service Discovery",
        sections: [
          {
            subheading: "Kubernetes Concepts and Architecture",
            points: [
              "Master and Worker Components (API Server, Scheduler, Controller Manager, etcd)",
              "Node Components (kubelet, kube-proxy, Container Runtime)"
            ]
          },
          {
            subheading: "Kubernetes Objects and Resources",
            points: [
              "Pods",
              "ReplicaSets",
              "Deployments",
              "StatefulSets",
              "DaemonSets",
              "Jobs",
              "CronJobs"
            ]
          },
          {
            subheading: "Kubernetes Services",
            points: [
              "ClusterIP",
              "NodePort",
              "LoadBalancer",
              "ExternalName",
              "Headless Services and Service Discovery"
            ]
          },
          {
            subheading: "ConfigMaps and Secrets Management for Application Configuration",
            points: []
          },
          {
            subheading: "Resource Management with Limits, Requests, and Autoscaling",
            points: [
              "HPA",
              "VPA"
            ]
          },
          {
            subheading: "Namespaces and Role-Based Access Control (RBAC) for Multi-tenancy",
            points: []
          },
          {
            subheading: "Helm Introduction",
            points: [
              "Understanding Helm Charts",
              "Values.yaml",
              "Templates",
              "Installing and Managing Applications Using Helm"
            ]
          }
        ]
      },
      // --- Module 4 ---
      {
        title: "Module 4: Infrastructure Automation with Terraform and Continuous Delivery with Argo CD",
        sections: [
          {
            subheading: "Introduction to Infrastructure as Code (IaC) Principles",
            points: []
          },
          {
            subheading: "Terraform Basics",
            points: [
              "Providers",
              "Resources",
              "Variables",
              "Outputs",
              "Modules",
              "Writing Reusable and Scalable Terraform Code",
              "Terraform State Management and Remote Backends"
            ]
          },
          {
            subheading: "Automating Cloud Resources (AWS Focus)",
            points: [
              "EC2",
              "VPC",
              "Security Groups",
              "IAM Roles Creation using Terraform"
            ]
          },
          {
            subheading: "Introduction to GitOps Principles",
            points: [
              "Git as a Single Source of Truth for Deployments"
            ]
          },
          {
            subheading: "Argo CD Architecture and Concepts",
            points: [
              "Application Definitions",
              "Repositories",
              "Target Clusters",
              "Declarative Deployment Model",
              "Setting up Argo CD for Kubernetes Continuous Delivery",
              "Managing Synchronization, Rollbacks, and Progressive Delivery with Argo CD",
              "Managing Application Health, Status, and Rollouts"
            ]
          }
        ]
      },
      // --- Module 5 ---
      {
        title: "Module 5: Service Mesh with Istio and Kubernetes Networking Deep Dive",
        sections: [
          {
            subheading: "Introduction to Service Mesh Concepts",
            points: [
              "East-West vs North-South Traffic Management",
              "Security, Observability, Traffic Control in Microservices"
            ]
          },
          {
            subheading: "Istio Architecture",
            points: [
              "Pilot",
              "Mixer",
              "Citadel",
              "Envoy Proxy"
            ]
          },
          {
            subheading: "Installing Istio on Kubernetes Clusters",
            points: []
          },
          {
            subheading: "Key Istio Features",
            points: [
              "Traffic Shifting",
              "Routing Rules",
              "Canary Deployments",
              "Circuit Breaking",
              "Fault Injection",
              "Retry and Timeout Policies"
            ]
          },
          {
            subheading: "Securing Communication",
            points: [
              "mTLS (Mutual TLS) between Services",
              "VirtualServices and DestinationRules Configuration",
              "Ingress Gateway Management using Istio"
            ]
          },
          {
            subheading: "Kubernetes Advanced Networking",
            points: [
              "Ingress Controllers (Nginx, Istio Gateway)",
              "Network Policies for Pod Communication Restrictions"
            ]
          }
        ]
      },
      // --- Module 6 ---
      {
        title: "Module 6: Monitoring, Alerting, and Observability with Prometheus and Grafana",
        sections: [
          {
            subheading: "Importance of Monitoring and Observability in DevOps Practices",
            points: []
          },
          {
            subheading: "Introduction to Metrics, Logging, and Tracing Concepts",
            points: []
          },
          {
            subheading: "Prometheus Architecture",
            points: [
              "Prometheus Server",
              "Node Exporters",
              "PushGateway",
              "Pull vs Push Metrics Collection Model",
              "Setting up Prometheus on Kubernetes"
            ]
          },
          {
            subheading: "Writing Prometheus Query Language (PromQL) Expressions",
            points: []
          },
          {
            subheading: "Configuring AlertManager and Notification Routing",
            points: [
              "Slack",
              "Email"
            ]
          },
          {
            subheading: "Introduction to Grafana",
            points: [
              "Datasource Connection (Prometheus, Loki, Elasticsearch)",
              "Building Interactive Dashboards and Panels",
              "Setting Up Alerts and Annotations"
            ]
          },
          {
            subheading: "End-to-End Observability Pipelines",
            points: [
              "Metrics Collection → Visualization → Alerting → Incident Response"
            ]
          },
          {
            subheading: "Final DevOps Automation Overview",
            points: [
              "Integrating CI/CD, Infrastructure Provisioning, Application Deployment, and Monitoring into a Single Workflow"
            ]
          }
        ]
      }
    ]
  }
,

  {
    id: "generative-ai-agentic-ai-prompt-engineering",
    slug: "generative-ai-agentic-ai-prompt-engineering",
    title: "Generative AI, Agentic AI & Prompt Engineering for Modern Intelligence",
    subtitle: "Master the next frontier of AI innovation with Generative Models, Autonomous Agents, and Prompt Crafting. Learn to build, operate, and scale AI systems that can create, reason, and act independently. Build Autonomous, Intelligent Systems with Cutting-Edge Generative Models, AI Agents, and Advanced Prompt Crafting.",
    imageSrc: DockerImage,
    time: "10:00 AM",
    duration: "1800", // Example total duration (in minutes) for the full course
    modules: [
      // --- Module 1 ---
      {
        title: "Module 1: Foundations of Generative AI and Agentic AI",
        sections: [
          {
            subheading: "Introduction to Artificial Intelligence: Concepts, Applications, and Evolution",
            points: [
              "Machine Learning vs Deep Learning vs Generative AI",
              "What Makes Generative AI Different: Creativity, Novelty, and Adaptability",
              "Overview of Foundation Models: GPT, DALL-E, Stable Diffusion, Gemini, Claude",
              "Core Components: Transformers, Diffusion Models, Language Models, Vision Models",
              "Agentic AI: Definition, Need, and Key Differentiators from Traditional AI",
              "Autonomous Agents: AutoGPT, BabyAGI, LangChain Agents",
              "Industry Use Cases: Content Generation, Customer Support, Research Automation",
              "Setting Up Python Environment: Installation of Jupyter, Colab, Huggingface, OpenAI SDK"
            ]
          }
        ]
      },
      // --- Module 2 ---
      {
        title: "Module 2: Prompt Engineering Essentials",
        sections: [
          {
            subheading: "What is a Prompt: Instruction, Context, and Input-output Mechanism",
            points: []
          },
          {
            subheading: "Types of Prompting:",
            points: [
              "Zero-shot Prompting (Single-step instruction without examples)",
              "One-shot Prompting (With one reference example)",
              "Few-shot Prompting (With multiple reference examples)"
            ]
          },
          {
            subheading: "Chain-of-Thought (CoT) Prompting for Logical Reasoning",
            points: []
          },
          {
            subheading: "Role Prompting: Making the Model Act as an Expert (e.g., Lawyer, Doctor, Coder)",
            points: []
          },
          {
            subheading: "Self-asking Prompts for Complex Multi-step Tasks",
            points: []
          },
          {
            subheading: "Step-by-Step Prompt Development and Error Handling",
            points: []
          },
          {
            subheading: "Best Practices in Prompting: Clarity, Specificity, Role Assignment",
            points: []
          },
          {
            subheading: "Debugging Poor Prompts: Common Issues and Solutions",
            points: []
          }
        ]
      },
      // --- Module 3 ---
      {
        title: "Module 3: Deep Dive into Generative AI Models",
        sections: [
          {
            subheading: "Foundation Models vs Fine-tuned Models",
            points: []
          },
          {
            subheading: "Tokenization and Embeddings: Byte Pair Encoding (BPE), SentencePiece",
            points: []
          },
          {
            subheading: "Understanding Transformers in Detail:",
            points: [
              "Encoder-Decoder Structures",
              "Self-Attention and Cross-Attention Mechanisms"
            ]
          },
          {
            subheading: "Attention Mechanism: Scaled Dot-Product Attention, Multi-head Attention",
            points: []
          },
          {
            subheading: "Position Encodings: Absolute and Relative Positioning",
            points: []
          },
          {
            subheading: "Reinforcement Learning from Human Feedback (RLHF): Concepts and Pipelines",
            points: []
          },
          {
            subheading: "Huggingface Transformers Library:",
            points: [
              "Loading Pretrained Models",
              "Fine-tuning with Custom Datasets",
              "Saving and Deploying Models"
            ]
          },
          {
            subheading: "Ethical Considerations: Bias, Hallucination, Privacy",
            points: []
          }
        ]
      },
      // --- Module 4 ---
      {
        title: "Module 4: Building Autonomous Agentic AI Systems",
        sections: [
          {
            subheading: "What is an AI Agent: Key Concepts and Workflow",
            points: []
          },
          {
            subheading: "Components of an Agentic System:",
            points: [
              "Planner (Task Planning and Goal Setting)",
              "Executor (Task Execution Mechanism)",
              "Memory (Long-Term and Short-Term Storage)",
              "Tool Use (Integration with Web Browsers, Databases, APIs)"
            ]
          },
          {
            subheading: "Setting up LangChain Environment: Installation and Initialization",
            points: []
          },
          {
            subheading: "Building a Basic Agent:",
            points: [
              "Simple To-Do List Manager",
              "Research Assistant Using Wikipedia API"
            ]
          },
          {
            subheading: "Tool Chaining: How Agents Connect Multiple APIs Together",
            points: []
          },
          {
            subheading: "Recursive Reasoning and Self-Reflection in Agents",
            points: []
          },
          {
            subheading: "Use Cases of Agentic AI:",
            points: [
              "Automated Research Agents",
              "Task Delegation Bots",
              "Code Generation Agents"
            ]
          },
          {
            subheading: "Challenges in Agentic Systems: Hallucination, Error Recovery, Planning Horizon",
            points: []
          }
        ]
      },
      // --- Module 5 ---
      {
        title: "Module 5: Retrieval-Augmented Generation and Advanced Prompting",
        sections: [
          {
            subheading: "Why Traditional LLMs Need RAG (Knowledge Update Problem)",
            points: []
          },
          {
            subheading: "Architecture of Retrieval-Augmented Generation Systems:",
            points: [
              "Query Encoder",
              "Retriever",
              "Generator"
            ]
          },
          {
            subheading: "Introduction to Vector Databases:",
            points: [
              "ChromaDB, FAISS, Pinecone Overview",
              "Storing and Retrieving Knowledge Embeddings"
            ]
          },
          {
            subheading: "Building a Private Knowledge Assistant:",
            points: [
              "Document Ingestion and Chunking",
              "Semantic Search Mechanisms"
            ]
          },
          {
            subheading: "Advanced Prompt Engineering Techniques:",
            points: [
              "Dynamic Prompt Construction",
              "Context Window Management",
              "Prompt Caching and Optimization"
            ]
          },
          {
            subheading: "Memory and State Management in Conversational AI Systems",
            points: []
          }
        ]
      },
      // --- Module 6 ---
      {
        title: "Module 6: Scaling, Best Practices, and Future of AI",
        sections: [
          {
            subheading: "Deploying Generative AI Applications at Scale:",
            points: [
              "Rate Limiting, API Management, Horizontal Scaling",
              "Monitoring User Inputs and Model Outputs",
              "Versioning Models and Pipelines"
            ]
          },
          {
            subheading: "Introduction to CI/CD for AI Systems:",
            points: [
              "GitHub Actions, Model Deployment Pipelines"
            ]
          },
          {
            subheading: "Modern Trends in Gen AI and Agentic AI:",
            points: [
              "Multimodal Generative AI (Text + Image + Audio)",
              "Federated Learning for Private Data Training",
              "Model Distillation and Quantization Techniques"
            ]
          },
          {
            subheading: "Best Practices for Responsible AI Development:",
            points: [
              "Bias Testing",
              "Fairness Metrics",
              "Secure Deployment Strategies"
            ]
          }
        ]
      }
    ]
  }
];









  // ...other courses if any
