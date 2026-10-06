# AI Usage Log

## Tool Used

ChatGPT (OpenAI)

## How AI Was Used

AI was primarily used as a learning and debugging aid during this project.
Because React and Supabase were relatively new technologies for me, I used
ChatGPT to help explain unfamiliar concepts, understand errors, and reason
through implementation decisions.

I used the explanations to understand the concepts and then implemented,
tested, and verified the functionality in my own project.

## Usage Log

### Project planning and technology choices

**Purpose:** Discuss the two available implementation options and understand
the differences between building an Express API and using React with Supabase.

**AI assistance:** Helped explain the differences between the approaches and
discuss the project structure and workflow.

**Outcome:** I chose the React and Supabase option and set up the project using
Vite.

### React and project structure

**Purpose:** Improve my understanding of React concepts and how to structure
the application.

**AI assistance:** Explained component-based development, application state,
conditional rendering, and separation between components, services, and the
Supabase client.

**Outcome:** I developed a clearer understanding of how React applications are
structured and applied this while building the authentication, article and
navigation functionality.

### Supabase setup and configuration

**Purpose:** Understand how Supabase provides backend services and how the
frontend communicates with it.

**AI assistance:** Explained the Supabase client configuration, environment
variables, authentication settings, database configuration, and the
relationship between the React frontend and Supabase.

**Outcome:** I configured the Supabase client and connected the application to
the Supabase project using environment variables.The initial project setup was completed alongside the Noroff course modules. I used AI as a supplementary learning resource to further explain unfamiliar concepts where I found the provided course material lacked sufficient detail for my understanding.

### Authentication and email confirmation

**Purpose:** Understand and troubleshoot user registration, login, logout and
email confirmation.

**AI assistance:** Explained the Supabase authentication flow and helped
interpret validation and authentication errors during testing.

**Outcome:** I was able to test registration with a real email address,
confirm the account by email, log in successfully and verify the authenticated
UI state.

### Row Level Security

**Purpose:** Understand Supabase Row Level Security and how database access can
be restricted according to the authenticated user.

**AI assistance:** Explained RLS, `auth.uid()`, policy conditions, and the
difference between `USING` and `WITH CHECK`.

**Outcome:** I configured and tested policies for the posts table and gained a
better understanding of the relationship between authentication and database
authorization.

### Article functionality

**Purpose:** Understand and troubleshoot fetching and submitting articles
through Supabase.

**AI assistance:** Helped explain asynchronous data handling and debug issues
encountered while retrieving, creating and displaying article data.

**Outcome:** Article browsing and authenticated article submission were
implemented and tested successfully.

### Debugging and user feedback

**Purpose:** Investigate unexpected application behaviour and improve error
handling and user feedback.

**AI assistance:** Helped interpret errors and reason through issues involving
form validation, authentication state, article rendering and content
formatting.

**Outcome:** Problems were investigated individually and fixes were tested in
the application before continuing.

### Deployment

**Purpose:** Understand how the React application and Supabase configuration
should work after deployment.

**AI assistance:** Helped troubleshoot the Vercel deployment and explained how
the required environment variables should be configured in the production
environment.

**Outcome:** The application was successfully deployed and its authentication
and article functionality were tested in production.
