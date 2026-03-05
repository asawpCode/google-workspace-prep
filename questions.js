const questions = [
    {
        id: 1,
        category: "security",
        text: "Your organization wants to prevent a group of users from logging into their Google Drive when they are traveling internationally for business. You have added these users to an organizational unit (OU). You need to secure the users' access to the Google Drive app to meet this requirement. What should you do?",
        options: [
            "Require 2-step verification (2SV) when users in the OU sign in.",
            "Disable Google Drive for users in the OU.",
            "Define location-based access levels. Assign the levels to the Google Drive app for the OU.",
            "Define user-based access levels. Assign the levels to the Google Drive app for the OU."
        ],
        correctIndex: 2,
        explanation: "Context-Aware Access allows you to define access levels based on geographic location (Geo-IP). By creating a location-based access level and assigning it to the Google Drive app for the OU, you can block access when users are traveling internationally without disabling Drive entirely."
    },
    {
        id: 2,
        category: "security",
        text: "Your organization is undergoing an internal investigation related to a specific employee's activities. The legal department has mandated that all data associated with this employee's Google Workspace account must be preserved during the litigation. This preservation must override all standard data retention and deletion policies currently in place. What should you do?",
        options: [
            "In Google Vault, create a new custom retention rule for the employee's account and set the retention period to indefinite.",
            "In the Admin console, suspend the employee's Google Workspace account.",
            "In Google Vault, create a new matter, and place the user's account under a legal hold, covering all relevant data services.",
            "In the Admin console, use the data export tool to create an archive of all the employee's data, and store it securely."
        ],
        correctIndex: 2,
        explanation: "A legal hold in Google Vault is specifically designed to override all retention and deletion policies. Creating a matter and placing the user's account on hold ensures all data (Gmail, Drive, Chat, etc.) is preserved regardless of any existing retention rules or user deletions."
    },
    {
        id: 3,
        category: "objects",
        text: "Your company has a large fleet of Microsoft Windows desktops. The security team wants to ensure that all instances of Chrome browsers are managed and comply with company policies, such as blocking certain extensions. You have configured policies in the Admin console, but you notice that they are not being applied to the browsers on these Windows machines. You need to make sure that all Chrome browsers on these computers are enrolled in your organization's Google Workspace account. What should you do?",
        options: [
            "Upgrade to Chrome Enterprise Premium for each Windows device to enable management features.",
            "Generate an enrollment token in the Admin console and deploy it to the computers using a Windows Group Policy Object (GPO).",
            "Create a new organizational unit (OU) and apply a policy to this OU to force browser enrollment.",
            "Instruct all employees to sign in to their Chrome profile using their corporate Google account."
        ],
        correctIndex: 1,
        explanation: "To enroll Chrome browsers on Windows machines in a managed Workspace account, you generate a Chrome Browser Cloud Management enrollment token in the Admin console, then deploy it organization-wide using a Windows GPO. This registers the browsers without requiring users to sign in."
    },
    {
        id: 4,
        category: "services",
        text: "Your organization has a default Google Drive sharing policy that blocks all internal sharing between departments and external users. The Marketing and Sales departments need to share files with each other for collaborative projects, but the organization's strict security posture must otherwise be maintained. You need to configure sharing rules to allow file sharing only between members of the Marketing and Sales departments. What should you do?",
        options: [
            "Create a single trust rule that includes Marketing and Sales organizational units (OUs) that allows them to share and receive files with Marketing or Sales OU.",
            "Create a single trust rule that allows the Marketing organizational unit (OU) to share files with members of the Sales OU.",
            "Create a single trust rule that includes both the Marketing and Sales OUs and allows them to share files with any internal user.",
            "Place all members of the Marketing and Sales departments into a single organizational unit, and configure a sharing rule to allow sharing only within that unit."
        ],
        correctIndex: 0,
        explanation: "A single bidirectional Drive trust rule that includes both the Marketing and Sales OUs allows files to flow in both directions between those two OUs specifically, without opening sharing to the rest of the organization."
    },
    {
        id: 5,
        category: "troubleshooting",
        text: "An employee reports receiving a suspicious 'login attempt blocked' security alert on their recovery phone. You need to investigate this incident to find the IP address, geographic location, and exact time of the failed sign-in attempt. What should you do?",
        options: [
            "Review the Admin audit log for actions performed by other administrators.",
            "Run a search in Google Vault on the employee's account activity.",
            "Review the User audit log for recent changes to the employee's account profile.",
            "Review the Login audit log for sign-in events associated with the employee's email address."
        ],
        correctIndex: 3,
        explanation: "The Login audit log records all sign-in events, including failed attempts, along with the IP address, geographic location, and timestamp for each event. This is the correct tool for investigating authentication incidents."
    },
    {
        id: 6,
        category: "services",
        text: "The IT security team has found that legitimate emails from external partners are being incorrectly sent to spam, while phishing emails are reaching employee inboxes. You need to fix both issues. What should you do?",
        options: [
            "Configure an inbound gateway to accept all mail from the partners, and enable DMARC with a policy of p=reject.",
            "Create a routing rule to bypass spam filtering for all messages that contain the partners' domain names in the headers.",
            "Go to the safety settings to turn on protections against spoofing, and add the partner domains to an email allowlist.",
            "Deploy the Password Alert extension to all users, and enable enhanced pre-delivery message scanning for all inbound mail."
        ],
        correctIndex: 0,
        explanation: "Configuring an inbound gateway ensures partner emails bypass spam filters, resolving the false-positive issue. Enabling DMARC with p=reject instructs receiving mail servers to reject unauthenticated emails spoofing your domain, preventing phishing from reaching inboxes."
    },
    {
        id: 7,
        category: "services",
        text: "The sales department needs to use Gemini to analyze data and summarize information from their documents in Google Drive and conversations in Gmail. Only members of the sales OU should be able to connect Gemini to their Google Workspace data. You need to configure Gemini to meet these business requirements. What should you do?",
        options: [
            "At the root organizational level, enable both the core Gemini service and the Workspace extensions. Apply a DLP rule to block download, print, and copy functions to prevent Gemini access.",
            "Navigate to API controls and add Gemini to the list of trusted apps, ensuring it is only accessible to a group containing the sales OU members.",
            "In the sales OU, enable the core Gemini service. Then, create a new context-aware access level for the sales OU that grants access to the Google Drive and Gmail APIs.",
            "Ensure that the Gemini service is on for the sales OU. Then, select and turn on Workspace extensions for the sales OU only."
        ],
        correctIndex: 3,
        explanation: "To allow Gemini to access Drive and Gmail data for the sales OU only, you enable the core Gemini service for that OU and then enable Workspace extensions specifically for that OU. Workspace extensions are the feature that connects Gemini to Google Workspace data like Drive and Gmail."
    },
    {
        id: 8,
        category: "security",
        text: "Your company has departmental OUs. A new cross-functional project requires six specific employees from different departments to access a third-party SAML application. The application's service is turned Off for everyone at the top-level OU. You need to grant access only to these six project members without changing their OU or granting access to their entire departments. What should you do?",
        options: [
            "Create a security group with the selected project members. Navigate to Context-Aware Access, and create an access level that requires users to be a member of this new group to access the application.",
            "Go to Google Groups (groups.google.com), create a new group for project members. Use the search filter in the Admin console under the app's access settings to find and apply the service to this new group.",
            "For each of the six users, navigate to their individual user profile in the Admin console. Select Admin roles and privileges, and assign a custom role that grants access to the specific SAML application.",
            "Create a security group in the Admin console, add the selected users, find the application under Web and mobile apps, and turn the service on for this group."
        ],
        correctIndex: 0,
        explanation: "Context-Aware Access can be used to grant access to a SAML application based on group membership. By creating a security group with the six project members and an access level tied to that group, you can enable the application for only those users without restructuring OUs."
    },
    {
        id: 9,
        category: "security",
        text: "Your security operations (SecOps) team reports login attempts from unusual locations for several executive accounts. Leadership asks you to confirm whether any of these accounts were successfully accessed and what actions those users took afterward in Gmail and Drive. What should you do?",
        options: [
            "In the Admin console, use the investigation tool. Correlate successful user login events from the suspicious IPs with subsequent Gmail log events and Drive log events for the affected users.",
            "In the Admin console, go to Security > Reports. Run the Account status report to identify successful logins, and cross-reference it with the File sharing report for Drive activity.",
            "In the Admin console, navigate to the Alert Center and filter for suspicious login alerts. Review the alert details to see the full list of actions taken post-login.",
            "In Google Vault, create a new investigative matter. Run a search across all executive accounts for any Gmail and Drive activity that originated from the suspicious IP addresses."
        ],
        correctIndex: 0,
        explanation: "The Security Investigation Tool allows you to build multi-step queries that correlate data across multiple log types (Login, Gmail, Drive) in a single investigation. This is the most effective way to trace a user's activity after a suspicious login event."
    },
    {
        id: 10,
        category: "services",
        text: "Your company has offices in several different countries and is deploying Google Workspace. You're setting up Google Calendar and need to ensure that, when a user is creating a Google Calendar event, rooms are suggested in a nearby office. What should you do?",
        options: [
            "Add your users to Google Groups by location. Add room resources to the corresponding groups.",
            "Add your users to organizational units (OUs) by location. Add room resources to the corresponding OUs.",
            "Assign building ID, floor name, and floor section to define users' work locations based on defined buildings and rooms.",
            "Restrict room sharing to a dynamic group based on user location."
        ],
        correctIndex: 2,
        explanation: "Google Calendar's room suggestion feature uses a user's defined work location (building, floor, section) to suggest nearby rooms. You configure this by assigning users' work locations to match the buildings and rooms you have defined in the Admin console."
    },
    {
        id: 11,
        category: "services",
        text: "An internal application requires access to every user's Google Calendar to automatically schedule company-wide meetings. You need to grant the application access without requiring each user to provide consent individually. What should you do?",
        options: [
            "Trust the application by adding its OAuth 2.0 client ID to the list of Connected apps in the Admin console's API controls.",
            "Create a service account in the Google Cloud console. Authorize its client ID for the Calendar API scope by using domain-wide delegation in the Admin console.",
            "Create a Context-Aware Access level that allows the application's IP address to access the Google Calendar app for all users.",
            "Create an API key in the Google Cloud console, and restrict it to the Calendar API. Provide the key to the application developers."
        ],
        correctIndex: 1,
        explanation: "Domain-wide delegation allows a service account to act on behalf of any user in the domain for specified API scopes (like the Calendar API), without requiring individual user consent. This is the correct mechanism for server-to-server applications accessing user data across an organization."
    },
    {
        id: 12,
        category: "services",
        text: "You are migrating your organization's email to Google Workspace. Your organization uses the termaearth.com email domain. You need to configure Google Workspace to receive emails sent to termaearth.com. What should you do?",
        options: [
            "Establish a Transport Layer Security (TLS) connection between your company's existing mail servers and Google's mail servers.",
            "Configure an email address in Google Workspace to capture emails sent to unverified domains, including termaearth.com.",
            "Add a domain alias for termaearth.com in Google Workspace. Configure email forwarding to redirect emails to the new Google Workspace accounts.",
            "Add termaearth.com as a primary, secondary, or alias domain in Google Workspace. Update the Mail Exchange (MX) records with your domain registrar to direct mail flow to Google's mail servers."
        ],
        correctIndex: 3,
        explanation: "To receive email for a domain in Google Workspace, you must: (1) verify and add the domain in Google Workspace, and (2) update the MX records at your domain registrar to point to Google's mail servers. Both steps are required for inbound mail to work."
    },
    {
        id: 13,
        category: "security",
        text: "Your company's security team has requested two requirements to secure employees' mobile devices: enforcement of a passcode and remote wipe functionality. The security team does not want an agent to be installed on the mobile devices or to purchase additional licenses. Employees have a mix of iOS and Android devices. What should you do?",
        options: [
            "Set up advanced mobile management for iOS devices and basic mobile management for Android devices.",
            "Set up advanced management for both iOS and Android devices.",
            "Set up basic management for both iOS and Android devices.",
            "Implement a third-party enterprise mobility management (EMM) provider."
        ],
        correctIndex: 2,
        explanation: "Basic Mobile Management supports passcode enforcement and remote account wipe for both iOS and Android without requiring an agent app to be installed and without additional licensing costs. Advanced management requires an agent and adds features like Work Profiles."
    },
    {
        id: 14,
        category: "troubleshooting",
        text: "You are attempting to apply a new security setting to an OU in the Admin console. After you click Save, the page hangs and displays a generic error. You have confirmed no outages exist and your permissions are correct, and the issue persists in a different browser. You need to gather the most effective diagnostic information to provide technical support while replicating the failure. What should you do?",
        options: [
            "Review the browser's console log for any JavaScript errors that occurred during the save attempt.",
            "Find the entry from the Admin audit log that corresponds to the failed save attempt.",
            "Capture a screenshot of the error message and the name of the OU being modified.",
            "Obtain a HAR file captured from your browser during the failed attempt."
        ],
        correctIndex: 3,
        explanation: "A HAR (HTTP Archive) file captures all network requests and responses in the browser during a session. It provides Google Support with the exact request/response data, headers, and timing that occurred during the failure — far more diagnostic detail than a screenshot, console log, or audit log entry."
    },
    {
        id: 15,
        category: "security",
        text: "You are configuring a third-party SSO profile for your organization. You have entered the IdP's sign-in and sign-out URLs, but now you must verify that the SAML authentication responses are coming from a trusted source. You need to complete the security configuration to establish this trust. What should you do?",
        options: [
            "Create a Context-Aware Access rule that allows requests only from the IdP's IP address.",
            "Obtain the IdP's public verification certificate, and upload it to the SSO profile.",
            "Ask the IdP administrator for their private key to encrypt the SAML requests.",
            "Generate a new OAuth 2.0 client ID from the Admin console to share with the IdP."
        ],
        correctIndex: 1,
        explanation: "SAML authentication responses are digitally signed by the IdP using its private key. Google Workspace verifies the signature using the IdP's public certificate. You must upload this public verification certificate to the SSO profile to establish cryptographic trust in the responses."
    },
    {
        id: 16,
        category: "troubleshooting",
        text: "A user in your organization reports an error every time they try to book a specific resource in Google Calendar. You have verified it is not a permissions issue and there are no service disruptions. Following Google-recommended practices, you need to engage Google support to resolve the issue. What should you do first?",
        options: [
            "Instruct the user to try booking the resource from a different network and computer.",
            "Open a high-priority support case that includes a brief summary of the Calendar issue.",
            "Document the exact steps to reproduce the Calendar error, including any error messages and timestamps.",
            "Instruct the user to capture a HAR file of the session where the Calendar error occurs."
        ],
        correctIndex: 3,
        explanation: "Google Support requires a HAR file to diagnose client-side errors in web applications. Capturing a HAR file during the error provides the exact network traffic data Support needs to identify the root cause, making it the most productive first step before opening a case."
    },
    {
        id: 17,
        category: "security",
        text: "A user's account was recently compromised, and you need to determine the scope of the incident. You want to see all actions performed by that user in Google Drive in the last 7 days, including which files were accessed and if any were shared externally. What should you do?",
        options: [
            "Review the Drive log events.",
            "Check the User log events.",
            "Use the security investigation tool.",
            "Review the Admin log."
        ],
        correctIndex: 2,
        explanation: "The Security Investigation Tool allows you to query Drive log events with filters (user, date range, action type) and then take remediation actions — such as revoking sharing or deleting files — directly from the results. It provides a more powerful and actionable view than raw log event browsing."
    },
    {
        id: 18,
        category: "services",
        text: "An employee is leaving the company and, as part of the offboarding process, you need to transfer ownership of all their Google Drive files to their manager in the same domain. You need to complete this task efficiently from the Admin console. What should you do?",
        options: [
            "Use Drive and Docs settings to bulk reassign file ownership to the manager.",
            "Use Google Vault to place the user's Drive data into an export, and deliver it to the manager.",
            "Use the security investigation tool to search for all files owned by the user, and change the owner to the manager.",
            "Use the data migration service to move the Drive data from the departing user's account to the manager's account."
        ],
        correctIndex: 0,
        explanation: "The Admin console provides a built-in 'Transfer ownership' feature under Drive and Docs settings that bulk-transfers all files owned by one user to another user in the same domain. This is the designed, efficient mechanism for offboarding file ownership transfer."
    },
    {
        id: 19,
        category: "security",
        text: "Your legal department needs to use Google Chat for collaboration. A new policy requires that all conversations within the legal team's spaces are permanently retained for compliance. Furthermore, a company-wide mandate states that all Chat collaboration must be restricted to internal employees only. You need to configure Google Chat to meet these requirements. What should you do?",
        options: [
            "Turn on History for spaces for the legal organizational unit (OU), and configure Vault for indefinite retention. In the root OU, turn off the setting to allow users to add people from outside the organization.",
            "From the Google Vault console, apply an indefinite retention rule to all Chat messages that originate from the legal OU. Advise employees not to accept external invitations.",
            "At the root organizational level, turn on History for spaces for all users. Create a context-aware access rule to block Chat access from all external IP addresses.",
            "Advise the legal department to create a new space and configure its settings to enable chat history. Set up a DLP rule to block outgoing messages to external domains."
        ],
        correctIndex: 0,
        explanation: "Turning on History for the legal OU enables message storage so Vault can retain them. Configuring Vault with an indefinite retention rule for Chat ensures permanent preservation. Turning off external access at the root OU addresses the company-wide restriction on external collaboration."
    },
    {
        id: 20,
        category: "security",
        text: "Your company has been acquired and must create a complete, one-time archival copy of all data for every user in the organization as part of the decommissioning plan. You need to obtain a complete archive of all user data. What should you do?",
        options: [
            "Use Google Vault to create a retention rule that covers all data and export the results.",
            "Write a Google Apps Script that uses service APIs to download all data for every user.",
            "Use Google Takeout to download user data.",
            "Use the Data Export tool from the Admin console."
        ],
        correctIndex: 3,
        explanation: "The Admin console's Data Export tool is designed specifically for exporting all user data across the entire organization in bulk. It covers all Workspace services and is the appropriate tool for a complete organizational archive. Google Takeout is for individual users; Vault is for legal holds and eDiscovery."
    },
    {
        id: 21,
        category: "services",
        text: "The marketing team frequently collaborates with the product team, sharing confidential campaign strategies in Google Drive. These sensitive files can only be shared with members of the product team and no other internal departments. Both teams are in separate OUs. What should you do?",
        options: [
            "Create a Drive trust rule to allow sharing from the marketing OU only to the product OU.",
            "Set up a target audience that includes members from both the marketing and product teams to simplify sharing.",
            "Move all marketing and product team members into the same shared drive to contain the files.",
            "Implement a Data Loss Prevention (DLP) rule to scan for and block the sharing of marketing files to non-product teams."
        ],
        correctIndex: 0,
        explanation: "Drive trust rules allow you to define precisely which OUs or groups can share files with each other. Creating a trust rule from the marketing OU to the product OU restricts sharing specifically between those two departments without affecting anyone else."
    },
    {
        id: 22,
        category: "security",
        text: "Your compliance team has two requirements for documents stored in Google Drive: (1) any document containing credit card numbers must automatically have a 'Confidential' label applied; (2) for any file with this Confidential label, collaborators other than the owner must be prevented from downloading or copying the content. You need to configure the system to meet both requirements automatically. What should you do?",
        options: [
            "Create a Google Drive label named 'Confidential' with a sensitivity level. Configure a DLP rule to detect credit card numbers, apply the 'Confidential' label as an action, and set the label's security controls to restrict downloading and copying for non-owners.",
            "Use the security investigation tool to find files with credit card numbers, and create an automated notification for the administrator to remove the external collaborator.",
            "Configure a DLP rule to detect credit card numbers in Drive files and set its action to automatically apply the 'Confidential' label. Then, separately, create a Drive trust rule that blocks downloading and copying for files with the Confidential label.",
            "Configure a rule using AI-based classification to automatically train a new model that identifies credit card numbers, applies the Confidential label, and blocks downloads for collaborators."
        ],
        correctIndex: 0,
        explanation: "Drive labels with sensitivity levels can have built-in security controls (block download/copy for non-owners). A DLP rule can detect credit card numbers and automatically apply a label as its action. This single, integrated approach (label + DLP rule) automates both requirements end-to-end."
    },
    {
        id: 23,
        category: "security",
        text: "You work for a US-based healthcare company that has acquired a new subsidiary in France. To comply with GDPR, all primary data-at-rest for France subsidiary employees must be stored exclusively within the European Union. Data for US-based employees must remain in the United States. What should you do?",
        options: [
            "Create a second, separate Google Workspace tenant for the France subsidiary.",
            "In the Admin console, navigate to Data regions. Select the Europe Data region, and apply it specifically to the France subsidiary OU. Select the US Data region for all the OUs in which the US-based employees are assigned.",
            "In the Admin console, create a security group containing all users in the France subsidiary OU. Apply a context-aware access rule to this group that requires a device location within Europe to access data.",
            "In the Google Cloud console, link your Workspace instance to a new project. From the IAM & Admin settings, create a new policy that applies an organizational resource location constraint for Europe to the France subsidiary OU."
        ],
        correctIndex: 1,
        explanation: "Google Workspace Data Regions allow administrators to pin covered data to specific geographic regions (US or Europe) at the OU level. This is the built-in, supported way to meet data residency requirements for different employee groups within a single Workspace tenant."
    },
    {
        id: 24,
        category: "objects",
        text: "A new security mandate requires a more restrictive Chrome extension policy for the Sales OU only. For users in the Sales OU, you must block all Chrome extensions with two exceptions: the Google Docs Offline extension must be automatically installed and pinned, and the Salesforce extension must be available for manual install. All other OUs must remain unaffected. What should you do?",
        options: [
            "In Web and mobile apps, add the required extensions from the Play Store and set a default block policy.",
            "On the Sales OU, allowlist the two extensions and create a DLP rule to ensure no data is exfiltrated through other apps.",
            "On the top-level OU, set a blocklist policy and then configure specific overrides for the Sales OU.",
            "On the Sales OU, set a blocklist policy and configure the two required extensions as exceptions."
        ],
        correctIndex: 3,
        explanation: "Setting a 'Block all' policy directly on the Sales OU isolates the restriction to that OU without affecting others. You then configure the two required extensions as exceptions within that same OU — one set to force-install with pin, one set to allow-install."
    },
    {
        id: 25,
        category: "services",
        text: "Your organization requires enhanced privacy and security when sending messages to banks and other financial institutions. Your organization uses Gmail, but the banks use various other email providers. You need to maximize the security of the transport channel for messages sent and received between your organization and the banks. What should you do?",
        options: [
            "Enable confidential mode for Gmail. Instruct employees to use confidential mode when sending messages to the banks.",
            "Set up Transport Layer Security (TLS) compliance for inbound and outbound messages with a list of the banks' email domains. Validate the TLS connections.",
            "Enable Protect against unauthenticated emails in Gmail Safety.",
            "Configure Sender Policy Framework (SPF) and DomainKeys Identified Mail (DKIM) authentication for your email domains."
        ],
        correctIndex: 1,
        explanation: "TLS compliance rules in Gmail allow you to require that emails to and from specific domains are sent over an encrypted TLS channel. If TLS cannot be established, the message is rejected rather than sent in plaintext — directly addressing transport-level security with the banks."
    },
    {
        id: 26,
        category: "services",
        text: "An internal application has been developed to automatically schedule project meetings in employees' Google Calendars based on tasks assigned in a project management system. The application uses a service account and needs to access and create events on any user's calendar without individual user OAuth consent. You need to configure the necessary permissions while adhering to the principle of least privilege. What should you do?",
        options: [
            "Create a custom SAML application in the Google Workspace Admin console, and map the Google Calendar API scope as an attribute.",
            "Configure and publish an internal OAuth consent screen in the Google Cloud console for the Google Calendar API scope.",
            "Generate a new API key in the Google Cloud console, restrict it to the Google Calendar API, and use it for authentication.",
            "Assign a specific OAuth scope that allows Calendar event management for the API client for the app in the API controls in the Admin console."
        ],
        correctIndex: 3,
        explanation: "Authorizing a specific OAuth scope for an app's client ID in API controls (domain-wide delegation) grants the service account only the Calendar event management scope it needs — adhering to least privilege. This avoids broader permissions like full domain-wide delegation via the Cloud console."
    },
    {
        id: 27,
        category: "services",
        text: "Your CIO has requested that several executive conference rooms be exclusively reservable by executives and their executive assistants. Other employees should only be able to view the rooms' availability. What should you do?",
        options: [
            "Configure the booking delegation settings for each room's calendar to delegate booking rights only to the executives and their assistants, while keeping general access to 'See only free/busy (hide details).'",
            "Set the sharing setting for each room's calendar to 'Make available only to specific people,' and individually add the executives and their assistants with 'Make changes to events' permission.",
            "Create a Google Group for the executives and their assistants. For each room, set the default organization access to 'See only free/busy (hide details)' and share the calendar with the group, granting it 'Make changes to events' permission.",
            "For each room, set the default organization access to 'See only free/busy (hide details)', and configure the calendar's settings to auto-accept invitations so that executives and assistants can join the group."
        ],
        correctIndex: 2,
        explanation: "Creating a group for executives and assistants, setting the room's org-wide access to free/busy only, and sharing the room calendar with the group at 'Make changes to events' level is the most scalable and manageable approach. Adding future executives/assistants to the group automatically grants them booking access."
    },
    {
        id: 28,
        category: "security",
        text: "Your company is undergoing a regulatory compliance audit. As part of the audit, you are required to demonstrate that you can preserve all electronic communications related to a specific project for a potential legal discovery process. You need to configure Google Vault to accomplish this goal. What should you do?",
        options: [
            "Use the security investigation report to show Vault log events.",
            "Use the search and export functionality to identify all relevant communications within the project timeframe.",
            "Create a matter and a hold on all project-related data sources such as Email, Chat, and Drive within Google Workspace.",
            "Create a custom retention policy for the project data. Ensure that the policy covers the required retention period."
        ],
        correctIndex: 2,
        explanation: "A Vault matter organizes the legal case, and a hold on the relevant data sources (Gmail, Chat, Drive) preserves all associated data from deletion, overriding any retention or deletion policies. This is the correct way to demonstrate preservation capability for legal discovery."
    },
    {
        id: 29,
        category: "directory",
        text: "Several employees from your finance department are collaborating on a long-term, multi-phase project. You need to create a confidential group for this project as quickly as possible. You also want to minimize management overhead. What should you do?",
        options: [
            "Create a Google Group by using Google Cloud Directory Sync (GCDS) to automatically sync the members.",
            "Create a dynamic group and define the Department user attribute as a condition for membership with the value as the finance department.",
            "Create a Google Group and update the settings to allow anyone in the organization to join the group.",
            "Create a Google Group and appoint a group admin to manage the membership of this group."
        ],
        correctIndex: 3,
        explanation: "For a project-specific group that isn't tied to a fixed directory attribute (like department), creating a standard Google Group and delegating membership management to a trusted group admin is the fastest and most efficient approach. This keeps the admin overhead off the Workspace administrator."
    },
    {
        id: 30,
        category: "troubleshooting",
        text: "Today your company signed up for Google Workspace Business Starter with an existing domain name. You want to add team members and manage their access to email and other services. However, you are unable to create new user accounts or change user settings. You need to fix this problem. What should you do?",
        options: [
            "Run the Transfer tool to bring unmanaged users to your Workspace account.",
            "Check domain ownership in the DNS settings.",
            "Wait 24 hours after signing up for the features to become active.",
            "Upgrade to a Google Workspace Enterprise edition."
        ],
        correctIndex: 1,
        explanation: "Google Workspace requires domain ownership verification via a DNS TXT record before you can manage users and settings. If domain verification is incomplete or has failed, administrative functions like creating users will be blocked until the domain is verified."
    },
    {
        id: 31,
        category: "directory",
        text: "A team of temporary employees left your organization after completing a shared project. Per company policy, you need to disable their Google Workspace accounts while preserving all project data and related communications in Google Vault for a minimum of two years. You want to comply with this policy while minimizing cost. What should you do?",
        options: [
            "Purchase and assign Archived User licenses to the former employees.",
            "Transfer the former employees' files and data to active user accounts. Delete the former employees' Workspace accounts.",
            "Purchase additional user licenses and suspend the former employees' accounts.",
            "Move the former employees to their own organizational unit (OU) and disable access to Google services for that OU."
        ],
        correctIndex: 0,
        explanation: "Archived User licenses are significantly cheaper than full Workspace licenses. They disable account access while retaining all data in Google Vault for eDiscovery and compliance, making them the cost-optimal solution for preserving departed employees' data."
    },
    {
        id: 32,
        category: "security",
        text: "The legal department needs urgent access to specific email communications from an employee who is currently on leave for a time-critical M&A deal. The organization's current retention policy is set to indefinite. You need to retrieve the required emails for the legal department in a manner that ensures data privacy. What should you do?",
        options: [
            "Instruct the IT department to directly access and forward the relevant emails to the legal department.",
            "Temporarily grant the legal department access to the employee's email account with a restricted scope limited to the M&A-related emails.",
            "Ask a colleague with delegate access to the employee's mailbox to identify and forward the relevant emails to the legal department.",
            "Use Google Vault to create a matter specific to the M&A deal. Search for relevant emails within the employee's mailbox. Export and share relevant emails with your legal department."
        ],
        correctIndex: 3,
        explanation: "Google Vault provides a governed, auditable, and privacy-preserving process for eDiscovery. Creating a matter, searching the specific employee's mailbox, and exporting only relevant emails ensures data privacy while giving the legal team exactly what they need without exposing the full account."
    },
    {
        id: 33,
        category: "services",
        text: "Your company distributes an internal newsletter containing sensitive information to all employees. You've noticed unauthorized forwarding of this newsletter to external addresses. To prevent this, you need to implement a solution that automatically detects and blocks such forwarding while allowing legitimate internal sharing. What should you do?",
        options: [
            "Add a banner to the newsletter that warns users that external sharing is prohibited.",
            "Create a Gmail content compliance rule that targets the internal newsletter, identifying instances of external forwarding. Configure the rule to reject the message when such forwarding is detected.",
            "Develop an Apps Script project using the Gmail API to scan sent emails for the newsletter content and external recipients. Automatically revoke access for violating users.",
            "Create a content compliance rule to modify the newsletter subject line, adding a warning against external forwarding."
        ],
        correctIndex: 1,
        explanation: "Gmail content compliance rules can match on specific message content (like a newsletter subject or body) and conditions (external recipient). Setting the action to 'Reject' automatically blocks unauthorized forwarding without requiring user training or manual intervention."
    },
    {
        id: 34,
        category: "security",
        text: "Your organization has hired temporary employees to work on a sensitive internal project. You need to ensure that the sensitive project data in Google Drive is limited to only internal domain sharing. You do not want to be overly restrictive. What should you do?",
        options: [
            "Configure the Drive sharing options for the domain to internal only.",
            "Restrict the Drive sharing options for the domain to allowlisted domains.",
            "Create a Drive DLP rule, and use the sensitive internal project name as the detector.",
            "Turn off the Drive sharing setting from the Team dashboard."
        ],
        correctIndex: 2,
        explanation: "A Drive DLP rule that detects content containing the specific project name (or other project-identifying content) and blocks external sharing applies the restriction only to files related to that project — avoiding the overly broad restriction of a domain-wide internal-only policy."
    },
    {
        id: 35,
        category: "security",
        text: "Several employees received messages with links to malicious websites, appearing to have been sent by your company's HR department. You need to identify which users received the emails and prevent a recurrence of similar incidents in the future. What should you do?",
        options: [
            "Search the sender's email address using Email Log Search. Identify the users that received the messages. Instruct them to mark them as spam and delete them.",
            "Search for the sender's email address using the security investigation tool. Mark the messages as phishing. Add the sender's email address to the Blocked senders list in Gmail settings.",
            "Collect a list of users who received the messages. Search in Google Vault. Export and download the malicious emails. Add the sender to a quarantine list in Gmail.",
            "Search for the sender's email address using the security investigation tool. Delete the messages. Turn on the safety options for spoofing and authentication protection in Gmail settings."
        ],
        correctIndex: 3,
        explanation: "The Security Investigation Tool lets you find all instances of the phishing email, delete them from all users' mailboxes, and take bulk remediation actions. Enabling Gmail's spoofing and authentication protection settings prevents similar impersonation attacks in the future."
    },
    {
        id: 36,
        category: "troubleshooting",
        text: "Your organization's users are reporting that a large volume of legitimate emails are being misidentified as spam in Gmail. You want to troubleshoot this problem while following Google-recommended practices. What should you do?",
        options: [
            "Adjust the organization's mail content compliance settings in the Admin console.",
            "Advise users to individually allowlist senders.",
            "Disable spam filtering for all users.",
            "Contact Google Workspace support and report a suspected system-wide spam filter malfunction."
        ],
        correctIndex: 3,
        explanation: "When a large volume of legitimate emails are misidentified as spam across the organization without any Admin console configuration changes, this indicates a potential issue with Google's spam filtering systems. The Google-recommended practice is to contact Google Workspace support to report and investigate a suspected system-wide malfunction."
    },
    {
        id: 37,
        category: "objects",
        text: "Your organization's security team has published a list of vetted third-party apps and extensions that can be used by employees. All other apps are prohibited unless approved. The Chrome Web Store policy at the top-level org allows all apps with an admin blocklist. You need to disable unapproved apps that have already been installed and prevent employees from installing unapproved apps. What should you do?",
        options: [
            "Change the Chrome Web Store allow/block mode to 'allow all apps, admin manages blocklist.' In the App access control card, block any existing web app that is not on the security team's vetted list.",
            "Change the Chrome Web Store allow/block mode to 'block all apps, admin manages allowlist.' Add the apps on the security team's vetted list to the allowlist.",
            "Disable Extensions and Chrome packaged apps as allowed types of apps and extensions for the top-level OU. Selectively enable the appropriate extension types for each sub-organization.",
            "Disable the Chrome Web Store service for the top-level OU. Enable the Chrome Web Store service for organizations that require Chrome apps and extensions."
        ],
        correctIndex: 1,
        explanation: "Switching to 'block all apps, admin manages allowlist' mode immediately blocks all non-vetted apps (including those already installed) and prevents new installations. Only the apps explicitly added to the allowlist by the admin can run, implementing a whitelist-based security model."
    },
    {
        id: 38,
        category: "security",
        text: "Your company handles sensitive client data and needs to maintain a high level of security to comply with strict industry regulations. You need to allow your company's security team to investigate potential security breaches by using the security investigation tool in the Google Admin console. What should you do?",
        options: [
            "Create an activity rule that triggers email notifications to the security team whenever a high-risk security event occurs.",
            "Assign the User Management Admin role to the security team.",
            "Assign the super admin role to the security team.",
            "Create an administrator role with Security Center access. Assign the role to the security team."
        ],
        correctIndex: 3,
        explanation: "The Security Investigation Tool requires specific Security Center privileges. Creating a custom admin role with only Security Center access and assigning it to the security team follows the principle of least privilege — granting investigation capability without broader admin powers."
    },
    {
        id: 39,
        category: "services",
        text: "Your organization requires enhanced privacy when sending messages to banks and other financial institutions. You need to maximize privacy and limit access to the actual message content for messages sent and received between your organization and the banks. What should you do?",
        options: [
            "Set up Transport Layer Security (TLS) compliance for inbound and outbound messages with the banks' email domains.",
            "Configure Sender Policy Framework (SPF) and DomainKeys Identified Mail (DKIM) authentication for your email domains.",
            "Enable Protect against unauthenticated emails in Gmail Safety.",
            "Enable confidential mode for Gmail. Instruct employees to use confidential mode when sending messages to the banks."
        ],
        correctIndex: 3,
        explanation: "Gmail Confidential Mode prevents recipients from forwarding, copying, printing, or downloading the email content. It also supports message expiry and passcode verification, directly limiting access to the message content itself — addressing the 'limit access to messages' requirement."
    },
    {
        id: 40,
        category: "services",
        text: "An end user has thousands of files stored in Google Drive. Their files are well organized with Drive labels. You need to advise the end user on how to quickly identify all files that are contracts. What should you do?",
        options: [
            "Advise the user to use the Google Drive API to search for files with the keyword 'contracts.'",
            "Advise the user to search in Drive for files with the keyword 'contracts', and use the 'modified by me' filter.",
            "Advise the user to search for files that are labeled as 'contracts.'",
            "Advise the user to use the Investigation tool to search for files with the keyword 'contracts' and updated by you."
        ],
        correctIndex: 2,
        explanation: "Since the user's files are already well organized with Drive labels, searching by the 'contracts' label is the fastest and most precise method. Label-based search directly surfaces all files tagged as contracts without needing to filter through keyword search results."
    },
    {
        id: 41,
        category: "security",
        text: "You've received multiple reports about a suspicious email from someone pretending to be from your organization's HR department, prompting employees to click a link for a password update. You want to remediate this sender's emails. What should you do?",
        options: [
            "Use the security investigation tool to search for users who received the suspicious email, and select 'Mark message as phishing.'",
            "Use the security investigation tool to action the suspicious email and select 'Mark message as spam.'",
            "Create an activity rule to alert administrators to similar emails from that sender.",
            "Notify all employees and request that they report this email as spam."
        ],
        correctIndex: 0,
        explanation: "Using the Security Investigation Tool to find all instances of the email and marking them as phishing is the correct remediation. This action removes the emails from users' inboxes, notifies Google's systems to treat similar emails as phishing, and is the proper categorization for a credential-harvesting attack."
    },
    {
        id: 42,
        category: "services",
        text: "Your organization needs an approval application for purchases where a user can enter information on the purchase required and then submit it for management approval. The application must be available on both the web and mobile devices. Your organization does not have software developers or the budget to hire a third party. What should you do?",
        options: [
            "Suggest that the organization develop an application internally with a database, a backend service, and a frontend service.",
            "Suggest that the organization continue to approve requests manually until budget is available.",
            "Suggest the organization use AppSheet to create the application.",
            "Suggest that the organization use Apps Script to create forms linked to a Google Sheet to store the purchase data."
        ],
        correctIndex: 2,
        explanation: "AppSheet is a no-code application development platform integrated with Google Workspace. It allows non-developers to build web and mobile apps (like approval workflows) that connect directly to Google Sheets data, requiring no coding or third-party budget."
    },
    {
        id: 43,
        category: "security",
        text: "Your organization is concerned about unauthorized access attempts. You want to implement a security measure that makes users change their password if there are twenty or more failed login attempts within one hour. You want to use the most effective and efficient approach. What should you do?",
        options: [
            "Set up a Chrome action rule to restrict users from defined ChromeOS actions after twenty failed password attempts.",
            "Create an activity rule for user log events, define a time period and threshold, and select an Action for the rule to force a password change.",
            "Create an activity rule for live-state data sources that meets the required time period and threshold.",
            "Enable email alerts to notify users that they need to change their password."
        ],
        correctIndex: 1,
        explanation: "Activity rules in the Admin console can monitor user log events for conditions like failed login attempts, define a time window and threshold, and automatically execute actions such as forcing a password change — providing automated, policy-driven response without manual intervention."
    },
    {
        id: 44,
        category: "directory",
        text: "An employee using a Workspace Enterprise Standard license was terminated from your organization. You need to ensure the former employee no longer has account access and preserve their documents for the manager and team. You want to minimize license cost. What should you do?",
        options: [
            "Delete the former employee's Workspace account.",
            "Suspend the former employee's Workspace account.",
            "Reset the password of the former employee and keep their Workspace license active.",
            "Switch the license type of the former employee's Workspace account to an Archived User license."
        ],
        correctIndex: 3,
        explanation: "Switching to an Archived User license blocks account access (no login) while preserving all data and keeping it accessible to the team. It is significantly cheaper than an Enterprise Standard license, minimizing cost while meeting both the access and preservation requirements."
    },
    {
        id: 45,
        category: "services",
        text: "Your organization's employees frequently collaborate with external clients and vendors using Google Meet. There are active instances of unsupervised meetings that do not have a host, and meetings that continue after a scheduled event has completed. You want to end all meetings being used inappropriately as quickly as possible. What should you do?",
        options: [
            "End all unsupervised meetings by using the Google Meet APIs.",
            "Enable Host Management for Google Meet, and train internal host employees how to end meetings for everyone.",
            "Turn off Google Meet in the Admin console for your organization. Turn Google Meet back on after two minutes.",
            "Identify and end all unsupervised meetings by using the security investigation tool."
        ],
        correctIndex: 3,
        explanation: "The Security Investigation Tool allows admins to identify active Meet sessions and take actions to end them. This provides immediate remediation across all unsupervised meetings without disrupting the broader Meet service for the entire organization."
    },
    {
        id: 46,
        category: "services",
        text: "Your organization uses live-streaming to host large Google Meet meetings. You need to limit the participation to affiliated Google Workspace domains by using the Admin console. What should you do?",
        options: [
            "Add the Trusted Workspace domain names in the Stream dialog box.",
            "Turn off live streaming to YouTube.",
            "Add participants to an organizational unit (OU). Turn on live streaming.",
            "Turn on in-house live streaming. Invite users from affiliated domains."
        ],
        correctIndex: 0,
        explanation: "Adding trusted/affiliated Google Workspace domain names in the Stream dialog box restricts live stream access to only those domains. Users from non-listed domains will be unable to join the stream, while affiliated domain users can participate."
    },
    {
        id: 47,
        category: "services",
        text: "You are configuring email for your company's Google Workspace account. The company wants to prevent certain types of files from being sent or received as email attachments in the simplest and most cost-effective way. What should you do?",
        options: [
            "Adjust the maximum message size limit to prevent large files from being sent or received.",
            "Enable the Security Sandbox in Gmail to automatically quarantine emails with suspicious attachments.",
            "Scan all incoming and outgoing emails for malicious attachments by using an industry standard third-party email security solution.",
            "Configure an attachment compliance rule in Gmail settings to block specific file types."
        ],
        correctIndex: 3,
        explanation: "Gmail's attachment compliance rules allow you to specify file type extensions (e.g., .exe, .zip) to block on inbound and/or outbound messages. This is the native, no-cost solution built into Gmail for blocking specific attachment types."
    },
    {
        id: 48,
        category: "services",
        text: "Your organization has a Shared Drive with 150 users organized as a group. All users need to be able to add and edit files, but the ability to move, delete, and share content must be limited to a single user. You need to configure the shared drive to meet these requirements efficiently. What should you do?",
        options: [
            "Create a folder inside the shared drive. Share the files with the group by using the share function.",
            "Create a folder inside the shared drive. Share the folder link with the group.",
            "In the Admin console, assign Contributor access for the shared drive to each user. Assign Content Manager access for the shared drive to the single user.",
            "In the Admin console, assign Contributor access for the shared drive to the group. Assign Content Manager access for the shared drive to the single user."
        ],
        correctIndex: 3,
        explanation: "Contributor access allows adding and editing files but not moving, deleting, or sharing — matching the group's requirements. Content Manager access adds the ability to move, delete, and share content — matching the single user's requirements. Assigning Contributor to the group (not 150 individuals) is the efficient approach."
    },
    {
        id: 49,
        category: "services",
        text: "Your company wants to minimize distractions and inappropriate content in their Google Chat spaces. You need to give trusted employees the ability to remove messages and ban users from specific Chat spaces. What should you do?",
        options: [
            "Assign the trusted employees as moderators for the relevant Chat spaces.",
            "Create a data loss prevention (DLP) rule that blocks inappropriate content from being shared.",
            "Use the security investigation tool to audit and monitor Chat messages.",
            "Disable all Chat spaces except those specifically approved by management."
        ],
        correctIndex: 0,
        explanation: "Google Chat space moderators have the ability to remove messages and remove (ban) users from the space. Assigning trusted employees as moderators for specific spaces delegates this capability at the space level without requiring admin access."
    },
    {
        id: 50,
        category: "directory",
        text: "Your organization acquired a small agency. You need to create user accounts for these new employees. The new users must be able to use both their new organization's email address and their email address with the sub-agency domain name. What should you do?",
        options: [
            "Redirect the acquired domain to Google's MX records and add the account as a 'send as' address.",
            "Set up the acquired agency as a secondary domain from the Manage domains page.",
            "Set up the acquired agency as a user alias domain from the Manage domains page.",
            "Set up the acquired agency as a secondary domain and swap it to the primary domain."
        ],
        correctIndex: 2,
        explanation: "A user alias domain automatically gives every user in the organization an email alias on that domain (e.g., user@neworg.com also receives mail at user@agency.com). This is the correct choice when you want all users to have both email addresses simultaneously without creating separate user accounts."
    },
    {
        id: 51,
        category: "objects",
        text: "The current data storage limit for the sales OU is set at 10GB per user. A subset of sales representatives needs 100GB of storage across shared services. You need to increase the storage for only the subset while using the least disruptive approach and the fewest configuration steps. What should you do?",
        options: [
            "Move the subset of users to a sub-OU, and assign a 100GB storage limit to that sub-OU.",
            "Instruct the subset of users to store their documents in a Shared Drive with a 100GB limit.",
            "Change the storage limit of the sales OU to 100GB.",
            "Create a configuration group, and add the subset of users to that group. Set the group storage limit to 100GB."
        ],
        correctIndex: 3,
        explanation: "Configuration groups allow you to override OU settings for specific users without moving them to a different OU. Creating a configuration group with the 100GB storage limit and adding only the relevant users is the least disruptive approach — it requires fewer steps than creating a sub-OU and doesn't affect other sales OU members."
    },
    {
        id: 52,
        category: "security",
        text: "Your company's security team should be able to investigate unauthorized external file sharing. You need to ensure the security team can use the security investigation tool, following the principle of least privilege. What should you do?",
        options: [
            "Grant the super admin role to a delegate from the security team.",
            "Create a pre-built reporting role. Assign the role to the security team alias.",
            "Share the Drive audit log with the security team.",
            "Create a custom admin role with security center privileges. Assign the role to the individual security team members."
        ],
        correctIndex: 3,
        explanation: "Following least privilege, create a custom admin role with only Security Center privileges (which includes the Investigation Tool) and assign it to individual security team members. Granting super admin would violate least privilege, and sharing audit logs doesn't give them investigation and action capabilities."
    },
    {
        id: 53,
        category: "troubleshooting",
        text: "Users at your company are reporting that they are not receiving some emails in their corporate Gmail account. You have checked the Google Workspace Status Dashboard and found no service disruptions. You need to identify the root cause and resolve the mail delivery issues. What should you do? (Choose two.)",
        options: [
            "Use Email Log Search (ELS) to identify specific delivery failures.",
            "Verify whether the organization's Mail Exchange (MX) records are correctly configured.",
            "Check the users' spam folders to determine whether emails are being misdirected.",
            "Investigate the Gmail log events for error messages or unusual patterns.",
            "Check the senders' IP addresses in the inbound mail gateway."
        ],
        correctIndex: [0, 1],
        explanation: "Email Log Search (ELS) shows the delivery status and failure reason for specific messages, identifying exactly what happened to undelivered emails. Verifying MX records ensures your domain is correctly pointing to Google's mail servers — a misconfigured MX record would cause delivery failures at the DNS level."
    },
    {
        id: 54,
        category: "directory",
        text: "You are designing a group structure for your company that will be used to grant access to a specific shared drive. You need this solution to automatically add and remove employees based on their job role. What should you do?",
        options: [
            "Create a security group. Add all employees with the desired job role. Grant the security group access to the shared drive.",
            "Create a distribution list. Add all employees with the desired job role. Grant the distribution list access to the shared drive.",
            "Create a dynamic group. Set the membership criteria to the desired job role. Grant the dynamic group access to the shared drive.",
            "Create a configuration group. Add users on an exception basis. Grant the configuration group access to the shared drive."
        ],
        correctIndex: 2,
        explanation: "A dynamic group with a membership rule based on the job role attribute automatically adds and removes employees as their job role changes in the directory. Granting this dynamic group access to the shared drive ensures the correct employees always have access without any manual membership management."
    },
    {
        id: 55,
        category: "services",
        text: "An executive asked you to give their executive administrator access to their Workspace account. You need to ensure that the executive administrator can manage emails in the executive's account while maintaining security and privacy. What should you do?",
        options: [
            "Assist the executive in setting up email forwarding to their executive administrator.",
            "Instruct the executive to share their password with their executive administrator.",
            "Create a Google Group, add all executive administrators. Enable delegated access to the Group.",
            "Grant delegated access to the executive's Gmail account, and assign access to their executive administrator in Gmail settings."
        ],
        correctIndex: 3,
        explanation: "Gmail delegation allows a specific user (the executive administrator) to read, send, and delete messages in another user's Gmail inbox (the executive's) without sharing credentials. The admin can configure this from the user's Gmail settings, maintaining a proper audit trail."
    },
    {
        id: 56,
        category: "services",
        text: "The innovation team at your organization has a dedicated room with prototype equipment. You need to make the room bookable, add the equipment, and ensure there are no booking conflicts. Only the innovation team and the sales directors can access this room. What should you do?",
        options: [
            "Create a separate Google Calendar resource for the room. Manually manage booking requests from both teams.",
            "Create a Google Group for the innovation team and another for sales directors. Share the room's calendar with both groups.",
            "Create a Google Calendar event for the room. Share the event with the innovation team and sales directors.",
            "Edit the Google Calendar settings for the room resource. Adjust the permission settings so only the innovation team and sales director group can view and book time on this calendar."
        ],
        correctIndex: 3,
        explanation: "Configuring the room resource's calendar permissions directly in Google Calendar settings allows you to restrict viewing and booking to specific groups (innovation team and sales directors) while the room's booking conflict prevention is handled automatically by the Calendar resource system."
    },
    {
        id: 57,
        category: "services",
        text: "You work for a healthcare provider that uses an external medical billing company to manage patient records and invoices. Your organization's employees need to share patient documents with the billing company's employees for processing. The billing company's employees can view and edit the documents, but they cannot delete them. What should you do?",
        options: [
            "Create a shared drive that is managed by your organization's employees. Grant Contributor access to the billing company's staff.",
            "Create a shared drive. Grant Content Manager access to your organization's employees and the billing company.",
            "Create a group, add employees from your organization and the billing company. Create a shared folder on Google Drive. Grant Editor access to the group.",
            "Restrict access for the medical billing company's employees by using Data Loss Prevention (DLP) policies."
        ],
        correctIndex: 0,
        explanation: "In a Shared Drive, Contributor access allows users to add, edit, and view files but NOT move, delete, or share content. This precisely matches the requirement: billing company staff can view and edit but cannot delete documents. The Shared Drive is managed by your organization's employees who have higher-level access."
    }
];
