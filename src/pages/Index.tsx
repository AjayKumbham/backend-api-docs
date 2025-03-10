
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ApiSection } from "@/components/ApiSection";
import { ApiEndpoint } from "@/components/ApiEndpoint";
import { InfoTable } from "@/components/InfoTable";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        
        {/* Authentication Section */}
        <ApiSection
          id="authentication"
          title="Authentication APIs"
          description="Authentication in the Evernorth backend is a two-step process for both user registration and login. This ensures security by verifying user identity before storing details or granting access."
        >
          <InfoTable
            title="Request Parameters"
            rows={[
              {
                parameter: "fullName",
                type: "string",
                required: true,
                description: "The full name of the user."
              },
              {
                parameter: "email",
                type: "string",
                required: true,
                description: "The email address of the user."
              },
              {
                parameter: "contact",
                type: "string",
                required: true,
                description: "The contact number of the user."
              },
              {
                parameter: "dob",
                type: "string",
                required: true,
                description: "The date of birth of the user in YYYY-MM-DD format."
              }
            ]}
          />
          
          <h3 className="text-xl font-medium mb-4">Sign-Up Process (2-Step)</h3>
          <p className="text-muted-foreground mb-6">
            The sign-up process consists of two steps:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-6 text-muted-foreground ml-4">
            <li>User Registration: The user submits their details to initiate the registration process.</li>
            <li>Email Verification: The user must verify their email using an OTP. Only after successful verification are the user details stored in the database, and a JWT token is issued.</li>
          </ol>
          
          <h4 className="text-lg font-medium mb-4">1. User Registration</h4>
          <ApiEndpoint
            method="POST"
            path="/api/auth/register"
            description="Register a new user by providing their details."
            requestBody={`{
  "fullName": "John Doe",
  "email": "kumbhamajaygoud2004@gmail.com",
  "contact": "1234567890",
  "dob": "1990-01-01"
}`}
            responseBody={`Registration initiated. Please verify your email with the OTP sent.`}
          />
          
          <h4 className="text-lg font-medium mb-4">2. Email Verification</h4>
          <ApiEndpoint
            method="POST"
            path="/api/auth/verify-email"
            description="Verify the user's email using the OTP sent."
            requestBody={`{
  "email": "kumbhamajaygoud2004@gmail.com",
  "otp": "813155"
}`}
            responseBody={`{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKOTAwMSIsImlhdCI6MTczODQ3MzcwNiwiZXhwIjoxNzM4NTYwMTA2fQ.OLYEJtT8lXLiqAzxmNfBjQ4m7Tr3P289LcusvLjOt-I"
}`}
          />
          
          <h3 className="text-xl font-medium mt-8 mb-4">Login Process (2-Step)</h3>
          <p className="text-muted-foreground mb-6">
            The login process consists of two steps:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-6 text-muted-foreground ml-4">
            <li>Send OTP for Login: The user requests an OTP to be sent to their registered email.</li>
            <li>Verify OTP and Retrieve Token: The user enters the OTP to verify their identity and receive a JWT token for authentication.</li>
          </ol>
          
          <h4 className="text-lg font-medium mb-4">3. Send OTP for Login</h4>
          <ApiEndpoint
            method="POST"
            path="/api/auth/login/send-otp"
            description="Send an OTP to the user's registered email for login."
            requestBody={`{
  "email": "kumbhamajaygoud2004@gmail.com"
}`}
            responseBody={`OTP sent successfully`}
          />
          
          <h4 className="text-lg font-medium mb-4">4. Verify OTP for Login</h4>
          <ApiEndpoint
            method="POST"
            path="/api/auth/login/verify-otp"
            description="Verify the OTP sent to the user's email and receive a JWT token for authentication."
            requestBody={`{
  "email": "kumbhamajaygoud2004@gmail.com",
  "otp": "848734"
}`}
            responseBody={`{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKOTAwMSIsImlhdCI6MTczODQyMDY3OCwiZXhwIjoxNzM4NTA3MDc4fQ.YwEjcQuBGJpl-DshR1-ffM5iiVcqu6Il_cfchuiT_Ww"
}`}
          />
          
          <h4 className="text-lg font-medium mb-4">5. Logout User</h4>
          <ApiEndpoint
            method="POST"
            path="/api/auth/logout"
            description="Invalidate the user's authentication token to log them out. The token is added to a blacklist and becomes unusable for any further API requests."
            responseBody={`200 OK`}
          />
          
          <div className="bg-blue-50 p-4 rounded-md mt-6">
            <h4 className="text-sm font-medium text-blue-700 mb-2">Notes</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
              <li>The token returned is a JWT token and is valid for exactly 24 hours (1 day).</li>
              <li>For sign-up: OTP expires in 5 minutes.</li>
              <li>For login: OTP expires in 1 minute.</li>
              <li>After expiration, the OTP value becomes null.</li>
            </ul>
          </div>
        </ApiSection>
        
        {/* Profile APIs Section */}
        <ApiSection
          id="profile"
          title="Profile APIs"
          description="The Profile API allows users to retrieve, update, and verify their profile information. The API includes endpoints for fetching profile data, updating profile details, and updating the email address through a two-step verification process."
        >
          <h3 className="text-lg font-medium mb-4">Authentication</h3>
          <p className="text-muted-foreground mb-6">
            All requests require authentication via a <strong>Bearer Token</strong> in the request header. Unauthorized requests will be denied.
          </p>
          <div className="bg-secondary p-3 rounded-md overflow-x-auto mb-8">
            <pre className="text-sm font-mono">
              Authorization: Bearer &lt;token&gt;
            </pre>
          </div>
          
          <h3 className="text-xl font-medium mb-4">Endpoints</h3>
          
          <h4 className="text-lg font-medium mb-4">1. Get Profile Data</h4>
          <ApiEndpoint
            method="GET"
            path="/api/users/profile"
            description="Retrieves the profile data of the authenticated user."
            responseBody={`{
  "memberId": "J9001",
  "fullName": "John Doe",
  "email": "kumbhamajaygoud2004@gmail.com",
  "contact": "1234567890",
  "dob": "1990-01-01",
  "createdAt": "2025-02-01T20:03:25.559487"
}`}
          />
          
          <h4 className="text-lg font-medium mb-4">2. Update Profile Data</h4>
          <ApiEndpoint
            method="PUT"
            path="/api/users/profile"
            description="Updates the user's profile information, except for the email and memberId, which cannot be changed. All fields are optional; only include the fields that need to be updated."
            requestBody={`{
  "fullName": "Ajay Kumbham",
  "contact": "9876543210",
  "dob": "2004-01-01"
}`}
            responseBody={`{
  "memberId": "J9001",
  "fullName": "Ajay Kumbham",
  "email": "kumbhamajaygoud2004@gmail.com",
  "contact": "9876543210",
  "dob": "2004-01-01",
  "createdAt": "2025-02-06T21:49:51.768617"
}`}
          />
          
          <h4 className="text-lg font-medium mb-4">3. Email Update (Two-Step Process)</h4>
          <h5 className="text-base font-medium mb-2">Step 1: Request Email Verification</h5>
          <ApiEndpoint
            method="POST"
            path="/api/users/profile/verify-email"
            description="Sends a verification email to the new email address provided by the user."
            requestBody={`{
  "email": "kumbhamajaygoud22cs@student.vardhaman.org"
}`}
            responseBody={`Verification email sent successfully`}
          />
          
          <h5 className="text-base font-medium mb-2">Step 2: Verify Email with OTP</h5>
          <ApiEndpoint
            method="PUT"
            path="/api/users/profile/verify-email"
            description="Verifies the new email using an OTP received in the verification email."
            requestBody={`{
  "email": "kumbhamajaygoud22cs@student.vardhaman.org",
  "otp": "375394"
}`}
            responseBody={`{
  "memberId": "K0401",
  "fullName": "Kumbham Ajay Goud",
  "email": "kumbhamajaygoud22cs@student.vardhaman.org",
  "contact": "9391942662",
  "dob": "2004-08-25",
  "createdAt": "2025-02-05T10:36:00.766806"
}`}
          />
        </ApiSection>
        
        {/* Payment APIs Section */}
        <ApiSection
          id="payment"
          title="Payment APIs"
          description="The Evernorth Payment APIs allow users to manage their payment methods, including retrieving, adding, updating, and deleting stored payment details. It supports multiple payment types: Credit Card, Debit Card, UPI, and Bank Transfer."
        >
          <h3 className="text-lg font-medium mb-4">Authentication</h3>
          <p className="text-muted-foreground mb-6">
            All requests require authentication via a <strong>Bearer Token</strong> in the request header. Unauthorized requests will be denied.
          </p>
          <div className="bg-secondary p-3 rounded-md overflow-x-auto mb-8">
            <pre className="text-sm font-mono">
              Authorization: Bearer &lt;token&gt;
            </pre>
          </div>
          
          <h3 className="text-xl font-medium mb-4">Endpoints</h3>
          
          <h4 className="text-lg font-medium mb-4">1. Retrieve All Payment Methods</h4>
          <ApiEndpoint
            method="GET"
            path="/api/users/payments"
            description="Retrieves a list of all stored payment methods for the authenticated user."
            responseBody={`[
  {
    "paymentType": "creditcard",
    "maskedCardNumber": "**3456",
    "upiId": null,
    "nameOnCard": "John Doe",
    "expiryDate": "2025-12-31",
    "cardType": "VISA",
    "accountHolderName": null,
    "maskedBankAccountNumber": null,
    "ifscCode": null
  },
  {
    "paymentType": "debitcard",
    "maskedCardNumber": "**1234",
    "upiId": null,
    "nameOnCard": "John Doe",
    "expiryDate": "2026-08-31",
    "cardType": "MasterCard",
    "accountHolderName": null,
    "maskedBankAccountNumber": null,
    "ifscCode": null
  },
  {
    "paymentType": "upi",
    "maskedCardNumber": null,
    "upiId": "john.doe@upi",
    "nameOnCard": null,
    "expiryDate": null,
    "cardType": null,
    "accountHolderName": null,
    "maskedBankAccountNumber": null,
    "ifscCode": null
  },
  {
    "paymentType": "banktransfer",
    "maskedCardNumber": null,
    "upiId": null,
    "nameOnCard": null,
    "expiryDate": null,
    "cardType": null,
    "accountHolderName": "John Doe",
    "maskedBankAccountNumber": "**7890",
    "ifscCode": "ABCD0123456"
  }
]`}
          />
          
          <h4 className="text-lg font-medium mb-4">2. Add a New Payment Method</h4>
          
          <h5 className="text-base font-medium mb-2">Adding a Credit Card</h5>
          <ApiEndpoint
            method="POST"
            path="/api/users/payments"
            description="Add a new credit card payment method."
            requestBody={`{
  "paymentType": "creditcard",
  "maskedCardNumber": "**3456",
  "nameOnCard": "John Doe",
  "expiryDate": "2025-12-31",
  "cardType": "VISA"
}`}
            responseBody={`{
  "paymentType": "creditcard",
  "maskedCardNumber": "**3456",
  "upiId": null,
  "nameOnCard": "John Doe",
  "expiryDate": "2025-12-31",
  "cardType": "VISA",
  "accountHolderName": null,
  "maskedBankAccountNumber": null,
  "ifscCode": null
}`}
          />
          
          <h4 className="text-lg font-medium mb-4">3. Update a Payment Method</h4>
          <ApiEndpoint
            method="PUT"
            path="/api/users/payments/{paymentType}"
            description="Updates an existing payment method. Only applicable fields for the specific payment type should be included. The paymentType itself cannot be updated."
            requestBody={`{
  "expiryDate": "2026-07-31",
  "cardType": "MasterCard"
}`}
            responseBody={`{
  "paymentType": "creditcard",
  "maskedCardNumber": "**3456",
  "upiId": null,
  "nameOnCard": "John Doe",
  "expiryDate": "2026-07-31",
  "cardType": "MasterCard",
  "accountHolderName": null,
  "maskedBankAccountNumber": null,
  "ifscCode": null
}`}
          />
          
          <h4 className="text-lg font-medium mb-4">4. Delete a Payment Method</h4>
          <ApiEndpoint
            method="DELETE"
            path="/api/users/payments/{paymentType}"
            description="Deletes a saved payment method based on its type."
            responseBody={`200 OK`}
          />
          
          <div className="bg-blue-50 p-4 rounded-md mt-6">
            <h4 className="text-sm font-medium text-blue-700 mb-2">Notes</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
              <li>Each user can store one payment method per type.</li>
              <li>POST and PUT requests must only include applicable fields; missing fields will be null in the response.</li>
              <li>Masked details (card numbers, bank accounts) ensure security.</li>
              <li>Bearer token authentication is mandatory for all requests.</li>
            </ul>
          </div>
        </ApiSection>
        
        {/* Address APIs Section */}
        <ApiSection
          id="address"
          title="Address APIs"
          description="The Address API allows users to store, retrieve, update, and remove addresses associated with their account. It provides a structured way to handle user address data, ensuring consistency and security across various applications."
        >
          <h3 className="text-lg font-medium mb-4">Authentication</h3>
          <p className="text-muted-foreground mb-6">
            All requests require authentication via a <strong>Bearer Token</strong> in the request header. Unauthorized requests will be denied.
          </p>
          <div className="bg-secondary p-3 rounded-md overflow-x-auto mb-8">
            <pre className="text-sm font-mono">
              Authorization: Bearer &lt;token&gt;
            </pre>
          </div>
          
          <InfoTable
            title="Request Parameters"
            rows={[
              {
                parameter: "addressLabel",
                type: "String",
                required: true,
                description: "Unique label for the address (e.g., Home, Work)."
              },
              {
                parameter: "addressLine1",
                type: "String",
                required: true,
                description: "Primary address line."
              },
              {
                parameter: "addressLine2",
                type: "String",
                required: false,
                description: "Secondary address line (optional)."
              },
              {
                parameter: "city",
                type: "String",
                required: true,
                description: "City name."
              },
              {
                parameter: "state",
                type: "String",
                required: true,
                description: "State name."
              },
              {
                parameter: "zipCode",
                type: "String",
                required: true,
                description: "Postal code."
              },
              {
                parameter: "landmark",
                type: "String",
                required: false,
                description: "Nearby landmark for easy identification (optional)."
              }
            ]}
          />
          
          <h3 className="text-xl font-medium mb-4">Endpoints</h3>
          
          <h4 className="text-lg font-medium mb-4">1. Get All Addresses</h4>
          <ApiEndpoint
            method="GET"
            path="/api/users/addresses"
            description="Retrieves a list of all saved addresses for the authenticated user."
            responseBody={`[
  {
    "addressLabel": "Home",
    "addressLine1": "123 Main St",
    "addressLine2": "Apt 4B",   
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "landmark": "Near Central Park" 
  }
]`}
          />
          
          <h4 className="text-lg font-medium mb-4">2. Add a New Address</h4>
          <ApiEndpoint
            method="POST"
            path="/api/users/addresses"
            description="Adds a new address for the authenticated user. All fields except addressLine2 and landmark are required."
            requestBody={`{
  "addressLabel": "Home",
  "addressLine1": "123 Main St",
  "addressLine2": "Apt 4B",   
  "city": "New York",
  "state": "NY",
  "zipCode": "10001",
  "landmark": "Near Central Park" 
}`}
            responseBody={`{
  "addressLabel": "Home",
  "addressLine1": "123 Main St",
  "addressLine2": "Apt 4B",   
  "city": "New York",
  "state": "NY",
  "zipCode": "10001",
  "landmark": "Near Central Park" 
}`}
          />
          
          <h4 className="text-lg font-medium mb-4">3. Update an Address</h4>
          <ApiEndpoint
            method="PUT"
            path="/api/users/addresses/{addressLabel}"
            description="Updates an existing address identified by addressLabel. All fields are optional; only include the fields that need to be updated."
            requestBody={`{
  "city": "Hyderabad",
  "landmark": "Near Central Vista"
}`}
            responseBody={`{
  "addressLabel": "Home",
  "addressLine1": "123 Main St",
  "addressLine2": "Apt 4B",
  "city": "Hyderabad",
  "state": "NY",
  "zipCode": "10001",
  "landmark": "Near Central Vista"
}`}
          />
          
          <h4 className="text-lg font-medium mb-4">4. Delete an Address</h4>
          <ApiEndpoint
            method="DELETE"
            path="/api/users/addresses/{addressLabel}"
            description="Deletes an address associated with the given addressLabel."
            responseBody={`200 OK`}
          />
        </ApiSection>
        
        {/* Health Conditions API Section */}
        <ApiSection
          id="health"
          title="Health Conditions APIs"
          description="The Health Conditions API provides endpoints to manage user health records, including retrieving, adding, updating, and deleting health conditions."
        >
          <h3 className="text-lg font-medium mb-4">Authentication</h3>
          <p className="text-muted-foreground mb-6">
            All requests require authentication via a <strong>Bearer Token</strong> in the request header. Unauthorized requests will be denied.
          </p>
          <div className="bg-secondary p-3 rounded-md overflow-x-auto mb-8">
            <pre className="text-sm font-mono">
              Authorization: Bearer &lt;token&gt;
            </pre>
          </div>
          
          <InfoTable
            title="Request Parameters"
            rows={[
              {
                parameter: "recordNo",
                type: "Integer",
                required: true,
                description: "Unique identifier for the health record."
              },
              {
                parameter: "healthCondition",
                type: "String",
                required: true,
                description: "Name of the health condition."
              },
              {
                parameter: "description",
                type: "String",
                required: false,
                description: "Additional details about the condition (optional)."
              }
            ]}
          />
          
          <h3 className="text-xl font-medium mb-4">Endpoints</h3>
          
          <h4 className="text-lg font-medium mb-4">1. Get All Health Records</h4>
          <ApiEndpoint
            method="GET"
            path="/api/users/health-records"
            description="Retrieves a list of all saved health records for the authenticated user."
            responseBody={`[
  {
    "recordNo": 1,
    "healthCondition": "Diabetes Type 2",
    "description": "Diagnosed in 2020, under medication"
  }
]`}
          />
          
          <h4 className="text-lg font-medium mb-4">2. Add a New Health Record</h4>
          <ApiEndpoint
            method="POST"
            path="/api/users/health-records"
            description="Adds a new health record for the authenticated user. The description field is optional."
            requestBody={`{
  "healthCondition": "Diabetes Type 2",
  "description": "Diagnosed in 2020, under medication"
}`}
            responseBody={`{
  "recordNo": 1,
  "healthCondition": "Diabetes Type 2",
  "description": "Diagnosed in 2020, under medication"
}`}
          />
          
          <h4 className="text-lg font-medium mb-4">3. Update a Health Record</h4>
          <ApiEndpoint
            method="PUT"
            path="/api/users/health-records/{recordNo}"
            description="Updates an existing health record identified by recordNo. All fields are optional; only include the fields that need to be updated."
            requestBody={`{
  "healthCondition": "Type 1 Diabetes",
  "description": "Type 1 diabetes with regular medication"
}`}
            responseBody={`{
  "recordNo": 1,
  "healthCondition": "Type 1 Diabetes",
  "description": "Type 1 diabetes with regular medication"
}`}
          />
          
          <h4 className="text-lg font-medium mb-4">4. Delete a Health Record</h4>
          <ApiEndpoint
            method="DELETE"
            path="/api/users/health-records/{recordNo}"
            description="Deletes a health record associated with the given recordNo."
            responseBody={`200 OK`}
          />
        </ApiSection>
        
        {/* Allergy Records APIs Section */}
        <ApiSection
          id="allergy"
          title="Allergy Records APIs"
          description="The Allergy Records API provides endpoints to manage user allergy records, including retrieving, adding, updating, and deleting records."
        >
          <h3 className="text-lg font-medium mb-4">Authentication</h3>
          <p className="text-muted-foreground mb-6">
            All requests require authentication via a <strong>Bearer Token</strong> in the request header. Unauthorized requests will be denied.
          </p>
          <div className="bg-secondary p-3 rounded-md overflow-x-auto mb-8">
            <pre className="text-sm font-mono">
              Authorization: Bearer &lt;token&gt;
            </pre>
          </div>
          
          <InfoTable
            title="Request Parameters"
            rows={[
              {
                parameter: "recordNo",
                type: "Integer",
                required: true,
                description: "Unique identifier for the allergy record."
              },
              {
                parameter: "allergies",
                type: "String",
                required: true,
                description: "The name(s) of the allergens."
              },
              {
                parameter: "description",
                type: "String",
                required: false,
                description: "Additional details about the allergy (optional)."
              }
            ]}
          />
          
          <h3 className="text-xl font-medium mb-4">Endpoints</h3>
          
          <h4 className="text-lg font-medium mb-4">1. Get All Allergy Records</h4>
          <ApiEndpoint
            method="GET"
            path="/api/users/allergy-records"
            description="Retrieves a list of all recorded allergies for the authenticated user."
            responseBody={`[
  {
    "recordNo": 1,
    "allergies": "Peanuts",
    "description": "Severe allergic reaction, carries EpiPen" 
  }
]`}
          />
          
          <h4 className="text-lg font-medium mb-4">2. Add a New Allergy Record</h4>
          <ApiEndpoint
            method="POST"
            path="/api/users/allergy-records"
            description="Adds a new allergy record for the authenticated user. The description field is optional."
            requestBody={`{
  "allergies": "Peanuts",
  "description": "Severe allergic reaction, carries EpiPen" 
}`}
            responseBody={`{
  "recordNo": 1,
  "allergies": "Peanuts",
  "description": "Severe allergic reaction, carries EpiPen"
}`}
          />
          
          <h4 className="text-lg font-medium mb-4">3. Update an Allergy Record</h4>
          <ApiEndpoint
            method="PUT"
            path="/api/users/allergy-records/{recordNo}"
            description="Updates an existing allergy record identified by recordNo. All fields are optional; only include the fields that need to be updated."
            requestBody={`{
  "allergies": "Peanuts, Shellfish"
}`}
            responseBody={`{
  "recordNo": 1,
  "allergies": "Peanuts, Shellfish",
  "description": "Severe allergic reactions, carries EpiPen"
}`}
          />
          
          <h4 className="text-lg font-medium mb-4">4. Delete an Allergy Record</h4>
          <ApiEndpoint
            method="DELETE"
            path="/api/users/allergy-records/{recordNo}"
            description="Deletes an allergy record associated with the given recordNo."
            responseBody={`200 OK`}
          />
        </ApiSection>
        
        {/* Dependents APIs Section */}
        <ApiSection
          id="dependents"
          title="Dependents APIs"
          description="The Dependents API provides endpoints to manage user dependents, including retrieving, adding, updating, and deleting records."
        >
          <h3 className="text-lg font-medium mb-4">Authentication</h3>
          <p className="text-muted-foreground mb-6">
            All requests require authentication via a <strong>Bearer Token</strong> in the request header. Unauthorized requests will be denied.
          </p>
          <div className="bg-secondary p-3 rounded-md overflow-x-auto mb-8">
            <pre className="text-sm font-mono">
              Authorization: Bearer &lt;token&gt;
            </pre>
          </div>
          
          <InfoTable
            title="Request Parameters"
            rows={[
              {
                parameter: "fullName",
                type: "String",
                required: true,
                description: "Full name of the dependent. If it contains spaces, replace them with %20 in the URL."
              },
              {
                parameter: "relation",
                type: "String",
                required: true,
                description: "Relationship of the dependent to the user."
              },
              {
                parameter: "dob",
                type: "String",
                required: true,
                description: "Date of birth of the dependent in YYYY-MM-DD format."
              },
              {
                parameter: "mobileNumber",
                type: "String",
                required: false,
                description: "Mobile number of the dependent (optional)."
              },
              {
                parameter: "emailAddress",
                type: "String",
                required: false,
                description: "Email address of the dependent (optional)."
              },
              {
                parameter: "emergencySosContact",
                type: "Boolean",
                required: false,
                description: "Indicates if this dependent is an emergency contact (optional)."
              }
            ]}
          />
          
          <h3 className="text-xl font-medium mb-4">Endpoints</h3>
          
          <h4 className="text-lg font-medium mb-4">1. Get All Dependents</h4>
          <ApiEndpoint
            method="GET"
            path="/api/users/dependents"
            description="Retrieves a list of all dependents for the authenticated user."
            responseBody={`[
  {
    "fullName": "Jane Doe",
    "relation": "Spouse",
    "dob": "1992-05-15",
    "mobileNumber": "9876543210",
    "emailAddress": "jane.doe@example.com",
    "emergencySosContact": true
  }
]`}
          />
          
          <h4 className="text-lg font-medium mb-4">2. Add a New Dependent</h4>
          <ApiEndpoint
            method="POST"
            path="/api/users/dependents"
            description="Adds a new dependent for the authenticated user."
            requestBody={`{
  "fullName": "Jane Doe",
  "relation": "Spouse",
  "dob": "1992-05-15",
  "mobileNumber": "9876543210",
  "emailAddress": "jane.doe@example.com",
  "emergencySosContact": true
}`}
            responseBody={`{
  "fullName": "Jane Doe",
  "relation": "Spouse",
  "dob": "1992-05-15",
  "mobileNumber": "9876543210",
  "emailAddress": "jane.doe@example.com",
  "emergencySosContact": true
}`}
          />
          
          <h4 className="text-lg font-medium mb-4">3. Update a Dependent</h4>
          <ApiEndpoint
            method="PUT"
            path="/api/users/dependents/{fullName}"
            description="Updates an existing dependent identified by fullName. All fields are optional; only include the fields that need to be updated."
            requestBody={`{
  "fullName": "Rahul"
}`}
            responseBody={`{
  "fullName": "Rahul",
  "relation": "Spouse",
  "dob": "1992-05-15",
  "mobileNumber": "9876543210",
  "emailAddress": "jane.doe@example.com",
  "emergencySosContact": true
}`}
          />
          
          <h4 className="text-lg font-medium mb-4">4. Delete a Dependent</h4>
          <ApiEndpoint
            method="DELETE"
            path="/api/users/dependents/{fullName}"
            description="Deletes a dependent associated with the given fullName."
            responseBody={`200 OK`}
          />
          
          <div className="bg-blue-50 p-4 rounded-md mt-6">
            <h4 className="text-sm font-medium text-blue-700 mb-2">Notes</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
              <li>All requests require authentication using a Bearer Token.</li>
              <li>For updating a dependent, only include fields that need to be changed.</li>
              <li>Spaces in fullName should be replaced with %20 in the request URL to ensure proper encoding.</li>
            </ul>
          </div>
        </ApiSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
