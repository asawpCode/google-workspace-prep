const questions = [
    {
        id: 1,
        category: "drive",
        text: "Your organization wants to prevent a group of users from logging into their Google Drive when they are traveling internationally for business. You have added these users to an organizational unit (OU). You need to secure the users' access to the Google Drive app to meet this requirement. What should you do?",
        options: [
            "Require 2-step verification (2SV) when users in the OU sign in.",
            "Disable Google Drive for users in the OU.",
            "Define location-based access levels. Assign the levels to the Google Drive app for the OU.",
            "Define user-based access levels. Assign the levels to the Google Drive app for the OU."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 2,
        category: "security",
        text: "Your organization is undergoing an internal investigation related to a specific employee’s activities. The legal department has mandated that all data associated with this employee’s Google Workspace account must be preserved during the litigation. This preservation must override all standard data retention and deletion policies currently in place. What should you do?",
        options: [
            "In Google Vault, create a new custom retention rule for the employee’s account and set the retention period to indefinite.",
            "In the Admin console, suspend the employee’s Google Workspace account.",
            "In Google Vault, create a new matter, and place the user’s account under a legal hold, covering all relevant data services.",
            "In the Admin console, use the data export tool to create an archive of all the employee’s data, and store it securely."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 3,
        category: "chrome",
        text: "Your company has a large fleet of Microsoft Windows desktops. The security team wants to ensure that all instances of Chrome browsers are managed and comply with company policies, such as blocking certain extensions. You have configured policies in the Admin console, but you notice that they are not being applied to the browsers on these Windows machines. You need to make sure that all Chrome browsers on these computers are enrolled in your organization’s Google Workspace account so they can be managed. What should you do?",
        options: [
            "Upgrade to a Chrome Enterprise Premium for each Windows device to enable management features.",
            "Generate an enrollment token in the Admin console and deploy it to the computers using a Windows Group Policy Object (GPO).",
            "Create a new organizational unit (OU) and apply a policy to this OU to force browser enrollment.",
            "Instruct all employees to sign in to their Chrome profile using their corporate Google account."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 4,
        category: "drive",
        text: "Your organization has a default Google Drive sharing policy that blocks all internal sharing between departments and external users. The Marketing and Sales departments need to share files with each other for collaborative projects, but the organization’s strict security posture must otherwise be maintained. You need to configure sharing rules to allow file sharing only between members of the Marketing and Sales departments. What should you do?",
        options: [
            "Create a single trust rule that includes Marketing and Sales organizational units (OUs) that allows them to share and receive files with Marketing or Sales OU.",
            "Create a single trust rule that allows the Marketing organizational unit (OU) to share files with members of the Sales OU.",
            "Create a single trust rule that includes both the Marketing and Sales organizational units and allows them to share files with any internal user.",
            "Place all members of the Marketing and Sales departments into a single organizational unit, and configure a sharing rule to allow sharing only within that unit."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 5,
        category: "admin",
        text: "An employee reports receiving a suspicious login attempt blocked security alert on their recovery phone. You need to investigate this incident to find the IP address, geographic location, and exact time of the failed sign-in attempt. What should you do?",
        options: [
            "Review the Admin audit log for actions performed by other administrators.",
            "Run a search in Google Vault on the employee’s account activity.",
            "Review the User audit log for recent changes to the employee’s account profile.",
            "Review the Login audit log for sign-in events associated with the employee’s email address."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 6,
        category: "gmail",
        text: "The IT security team has found that legitimate emails from external partners are being incorrectly sent to spam, while phishing emails are reaching employee inboxes. You need to fix both issues. What should you do?",
        options: [
            "Configure an inbound gateway to accept all mail from the partners, and enable DMARC with a policy of p=reject.",
            "Create a routing rule to bypass spam filtering for all messages that contain the partners’ domain names in the headers.",
            "Go to the safety settings to turn on protections against spoofing, and add the partner domains to an email allowlist.",
            "Deploy the Password Alert extension to all users, and enable enhanced pre-delivery message scanning for all inbound mail."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 7,
        category: "gmail",
        text: "The sales department needs to use Gemini to analyze data and summarize information from their documents in Google Drive and conversations in Gmail. To ensure a controlled rollout and maintain data governance, only members of the sales organizational unit (OU) should be able to connect Gemini to their Google Workspace data. You need to configure Gemini to meet these business requirements. What should you do?",
        options: [
            "At the root organizational level, enable both the core Gemini service and the Workspace extensions. Apply a Data Loss Prevention (DLP) rule to block download, print, and copy functions to prevent Gemini access.",
            "Navigate to API controls and add Gemini to the list of trusted apps, ensuring it is only accessible to a group containing the sales OU members.",
            "In the sales OU, enable the core Gemini service. Then, create a new context-aware access level for the sales OU that grants access to the Google Drive and Gmail APIs.",
            "Ensure that the Gemini service is on for the sales OU. Then, select and turn on Workspace extensions for the sales OU only."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 8,
        category: "directory",
        text: "Your company has organized its users into departmental organizational units (OUs). A new cross-functional Project requires a select group of employees from different departments to have access to a new, third-party SAML application. For security, this application’s service is turned Off for everyone at the top-level OU. You need to grant access to this application only to the six specific project members without changing their OU or granting access to their entire departments. What should you do?",
        options: [
            "Create a security group with the selected project members. Navigate to Context-Aware Access, and create an access level that requires users to be a member of this new group to access the application.",
            "Go to Google Groups (groups.google.com), and create a new group for the selected project members. Then use the search filter in the Admin console under the app’s access settings to find and apply the service to this new group.",
            "For each of the selected users, navigate to their individual user profile page in the Admin console. Select Admin roles and privileges, and assign a custom role that grants access to the specific SAML application.",
            "Create a security group in the Admin console, add the selected users to this group, find the application under Web and mobile apps, and turn the service on for this group."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 9,
        category: "gmail",
        text: "Your security operations (SecOps) team reports login attempts from unusual locations for several executive accounts. Leadership asks you to confirm whether any of these accounts were successfully accessed and what actions those users took afterward. You need to use Google Workspace tools to analyze login activity and user actions across Gmail and Drive. What should you do?",
        options: [
            "In the Admin console, use the investigation tool. Correlate successful user login events from the suspicious IPs with subsequent Gmail log events and Drive log events for the affected users.",
            "In the Admin console, go to Security > Reports. Run the Account status report to identify successful logins, and cross-reference it with the File sharing report for Drive activity.",
            "In the Admin console, navigate to the Alert Center and filter for suspicious login alerts. Review the alert details to see the full list of actions taken and files accessed by the user post-login.",
            "In Google Vault, create a new investigative matter. Run a search across all executive accounts for any Gmail and Drive activity that originated from the suspicious IP addresses, and export the results."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 10,
        category: "calendar",
        text: "Your company has offices in several different countries and is deploying Google Workspace. You’re setting up Google Calendar and need to ensure that, when a user is creating a Google Calendar event, rooms are suggested in a nearby office. What should you do?",
        options: [
            "Add your users to Google Groups by location. Add room resources to the corresponding groups.",
            "Add your users to organizational units (OUs) by location. Add room resources to the corresponding OUs.",
            "Assign building ID, floor name, and floor section to define users’ work locations based on defined buildings and rooms.",
            "Restrict room sharing to a dynamic group based on user location."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 11,
        category: "calendar",
        text: "An internal application requires access to every user’s Google Calendar to automatically schedule company-wide meetings. You need to grant the application access without requiring each user to provide consent individually. What should you do?",
        options: [
            "Trust the application by adding its OAuth 2.0 client ID to the list of Connected apps in the Admin console’s API controls.",
            "Create a service account in the Google Cloud console. Authorize its client ID for the Calendar API scope by using domain-wide delegation in the Admin console.",
            "Create a Context-Aware Access level that allows the application’s IP address to access the Google Calendar app for all users.",
            "Create an API key in the Google Cloud console, and restrict it to the Calendar API. Provide the key to the application developers."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 12,
        category: "migration",
        text: "You are migrating your organization’s email to Google Workspace. Your organization uses the termaearth.com email domain. You need to configure Google Workspace to receive emails sent to termaearth.com. What should you do?",
        options: [
            "Establish a Transport Layer Security (TLS) connection between your company’s existing mail servers and Google’s mail servers.",
            "Configure an email address in Google Workspace to capture emails sent to unverified domains, including termaearth.com.",
            "Add a domain alias for termaearth.com in Google Workspace. Configure email forwarding to redirect emails to the new Google Workspace accounts.",
            "Add termaearth.com as a primary, secondary, or alias domain in Google Workspace. Update the Mail Exchange (MX) records with your domain registrar to direct mail flow to Google’s mail servers."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 13,
        category: "mobile",
        text: "Your company’s security team has requested two requirements to secure employees’ mobile devices: enforcement of a passcode and remote wipe functionality. The security team does not want an agent to be installed on the mobile devices or to purchase additional licenses. Employees have a mix of iOS and Android devices. You need to ensure that these requirements are met. What should you do?",
        options: [
            "Set up advanced mobile management for iOS devices and basic mobile management for Android devices.",
            "Set up advanced management for both iOS and Android devices.",
            "Set up basic management for both iOS and Android devices.",
            "Implement a third-party enterprise mobility management (EMM) provider."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 14,
        category: "directory",
        text: "You are attempting to apply a new security setting to an organizational unit (OU) in the Admin console. After you click Save, the page hangs for several seconds. Then, it displays a generic An error occurred notification, and the setting does not apply. You have already confirmed there are no outages on the Google Workspace Status Dashboard and that your administrator account has the correct permissions. The issue persists even after trying a different browser. You need to gather the most effective diagnostic information to provide technical support while replicating the failure. What should you do?",
        options: [
            "Review the browser’s console log for any JavaScript errors that occurred during the save attempt.",
            "Find the entry from the Admin audit log that corresponds to the failed save attempt.",
            "Capture a screenshot of the error message and the name of the OU being modified.",
            "Obtain a HAR file captured from your browser during the failed attempt."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 15,
        category: "security",
        text: "You are configuring a third-party SSO profile for your organization. You have entered the IdP’s sign-in and sign-out URLs, but now you must verify that the SAML authentication responses are coming from a trusted source. You need to complete the security configuration to establish this trust. What should you do?",
        options: [
            "Create a Context-Aware Access rule that allows requests only from the IdP’s IP address.",
            "Obtain the IdP’s public verification certificate, and upload it to the SSO profile.",
            "Ask the IdP administrator for their private key to encrypt the SAML requests.",
            "Generate a new OAuth 2.0 client ID from the Admin console to share with the IdP."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 16,
        category: "calendar",
        text: "A user in your organization is reporting an error that occurs every time they try to book a specific resource in Google Calendar. You have already verified it is not a permissions issue and the Google Workspace Status Dashboard shows no service disruptions. Following Google-recommended practices, you need to engage Google support to resolve the issue. What should you do first?",
        options: [
            "Instruct the user to try booking the resource from a different network and computer.",
            "Open a high-priority support case that includes a brief summary of the Calendar issue.",
            "Document the exact steps to reproduce the Calendar error, including any error messages and timestamps.",
            "Instruct the user to capture a HAR file of the session where the Calendar error occurs."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 17,
        category: "drive",
        text: "A user’s account was recently compromised, and you need to determine the scope of the incident. You want to see all actions performed by that user in Google Drive in the last 7 days, including which files were accessed and if any were shared externally. What should you do?",
        options: [
            "Review the Drive log events.",
            "Check the User log events.",
            "Use the security investigation tool.",
            "Review the Admin log."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 18,
        category: "drive",
        text: "An employee is leaving the company and, as part of the offboarding process, you need to transfer ownership of all their Google Drive files to their manager in the same domain. You need to complete this task efficiently from the Admin console. What should you do?",
        options: [
            "Use Drive and Docs settings to bulk reassign file ownership to the manager.",
            "Use Google Vault to place the user’s Drive data into an export, and deliver it to the manager.",
            "Use the security investigation tool to search for all files owned by the user, and change the owner to the manager.",
            "Use the data migration service to move the Drive data from the departing user’s account to the manager’s account."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 19,
        category: "chat",
        text: "Your legal department needs to use Google Chat for collaboration. A new policy requires that all conversations within the legal team’s spaces are permanently retained for compliance. Furthermore, a company-wide mandate states that all Chat collaboration must be restricted to internal employees only. You need to configure Google Chat to meet these requirements. What should you do?",
        options: [
            "Turn on History for spaces for the legal organizational unit (OU), and configure Vault for indefinite retention. In the root OU, turn off the setting to allow users to add people from outside the organization.",
            "From the Google Vault console, apply an indefinite retention rule to all Chat messages that originate from the legal OU. Advise employees not to accept external invitations.",
            "At the root organizational level, turn on History for spaces for all users. Create a context-aware access rule to block Chat access from all external IP addresses.",
            "Advise the legal department to create a new space, and configure its settings to enable chat history. Set up a data loss prevention (DLP) rule to block outgoing messages to external domains."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 20,
        category: "admin",
        text: "Your company has been acquired and must merge its operations with the parent company, which uses a different cloud productivity suite. As part of the decommissioning plan for the Google Workspace account, your company is required to create a complete, one-time archival copy of all data for every user in the organization. You need to obtain a complete archive of all user data. What should you do?",
        options: [
            "Use Google Vault to create a retention rule that covers all data and export the results.",
            "Write a Google Apps Script that uses service APIs to download all data for every user.",
            "Use Google Takeout to download user data.",
            "Use the Data Export tool from the Admin console."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 21,
        category: "drive",
        text: "The marketing team at your organization frequently collaborates with the product team, sharing confidential campaign strategies in Google Drive. There is a requirement to ensure these sensitive files can only be shared with members of the product team and no other internal departments. Both teams are in separate organizational units (OUs). What should you do?",
        options: [
            "Create a Drive trust rule to allow sharing from the marketing OU only to the product OU.",
            "Set up a target audience that includes members from both the marketing and product teams to simplify sharing.",
            "Move all marketing and product team members into the same shared drive to contain the files.",
            "Implement a Data Loss Prevention (DLP) rule to scan for and block the sharing of marketing files to non-product teams."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 22,
        category: "drive",
        text: "Your compliance team has two requirements for documents stored in Google Drive. First, any document containing credit card numbers must automatically have a Confidential label applied. Second, for any file with this Confidential label, collaborators other than the owner must be prevented from downloading or copying the content. You need to configure the system to meet both of these requirements automatically. What should you do?",
        options: [
            "Create a Google Drive label named Confidential with a sensitivity level. Configure a Data Loss Prevention (DLP) rule to detect credit card numbers, apply the Confidential label as an action, and set the label’s security controls to restrict downloading and copying for non-owners.",
            "Use the security investigation tool to find files with credit card numbers, and create an automated notification for the administrator to remove the external collaborator.",
            "Configure a Data Loss Prevention (DLP) rule to detect credit card numbers in Drive files and set its action to automatically apply the “Confidential” Drive label. Then, separately, create a Drive trust rule that blocks downloading and copying for files with the Confidential label when shared with collaborators.",
            "Configure a rule using AI-based classification to automatically train a new model that identifies credit card numbers and applies the Confidential label to block downloads for collaborators. Create a Data Loss Prevention (DLP) rule to block download and copy functions."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 23,
        category: "admin",
        text: "You work for a US-based healthcare company that has acquired a new subsidiary in France. To comply with GDPR, the legal team has mandated that all primary data-at-rest for the employees in the newly acquired France subsidiary must be stored exclusively within the European Union. The data for all US-based employees must remain in the United States. You need to configure your Google Workspace environment to meet these data residency requirements. What should you do?",
        options: [
            "Create a second, separate Google Workspace tenant for the France subsidiary.",
            "In the Admin console, navigate to Data regions. Select the Europe Data region, and apply it specifically to the France subsidiary organizational unit (OU). Select the US Data region for all the OUs in which the US-based employees are assigned.",
            "In the Admin console, create a security group containing all users in the France subsidiary organizational unit (OU). Apply a context-aware access rule to this group that requires a device location within Europe to access data.",
            "In the Google Cloud console, link your Workspace instance to a new project. From the IAM & Admin settings, create a new policy that applies an organizational resource location constraint for Europe to the France subsidiary organizational unit (OU)."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 24,
        category: "chrome",
        text: "Your organization’s top-level organizational unit (OU) is configured to allow users to install any app from the Chrome Web Store. A new security mandate requires a more restrictive policy for the Sales OU. For users in the Sales OU only, you must block access to all Chrome extensions, with two exceptions: the Google Docs Offline extension must be automatically installed and pinned to the taskbar, and the Salesforce extension must be available for users to install manually. All other OUs must remain unaffected. What should you do?",
        options: [
            "In Web and mobile apps, add the required extensions from the Play Store and set a default block policy.",
            "On the Sales OU, allowlist the two extensions and create a DLP rule to ensure no data is exfiltrated through other apps.",
            "On the top-level OU, set a blocklist policy and then configure specific overrides for the Sales OU.",
            "On the Sales OU, set a blocklist policy and configure the two required extensions as exceptions."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 25,
        category: "gmail",
        text: "Your organization requires enhanced privacy and security when sending messages to banks and other financial institutions. Your organization uses Gmail, but the banks use various other email providers. You need to maximize privacy and limit access to messages sent and received between your organization and the banks. What should you do?",
        options: [
            "Enable confidential mode for Gmail. Instruct employees to use confidential mode when sending messages to the banks.",
            "Set up Transport Layer Security (TLS) compliance for inbound and outbound messages with a list of the banks’ email domains. Validate the TLS connections.",
            "Enable Protect against unauthenticated emails in Gmail Safety.",
            "Configure Sender Policy Framework (SPF) and DomainKeys Identified Mail (DKIM) authentication for your email domains."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 26,
        category: "calendar",
        text: "An internal application has been developed to automatically schedule project meetings in employees’ Google Calendars based on tasks assigned in a new project management system. The application uses a service account to authenticate to Google APIs. To function correctly, the application needs to access and create events on any user’s calendar without requiring each user to manually approve access via an OAuth consent screen. You need to configure the necessary permissions for the application to function correctly while adhering to the principle of least privilege. What should you do?",
        options: [
            "Create a custom SAML application in the Google Workspace Admin console, and map the Google Calendar API scope as an attribute.",
            "Configure and publish an internal OAuth consent screen in the Google Cloud console for the Google Calendar API scope.",
            "Generate a new API key in the Google Cloud console, restrict it to the Google Calendar API, and use it for authentication.",
            "Assign a specific OAuth scope that allows Calendar event management for the API client for the app in the API controls in the Admin console."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 27,
        category: "calendar",
        text: "Your chief information officer (CIO) has requested that several executive conference rooms be exclusively reservable by the executives and their executive assistants. You need to configure these rooms in Google Calendar to ensure that only these specific individuals can book them, while other employees can only view the rooms’ availability. What should you do?",
        options: [
            "Configure the booking delegation settings for each room’s calendar to delegate booking rights only to the executives and their assistants, while keeping the general access to See only free/busy (hide details).",
            "Set the sharing setting for each room’s calendar to Make available only to specific people, and individually add the executives and their assistants with the Make changes to events permission.",
            "Create a Google group for the executives and their assistants. For each room, set the default organization access to See only free/busy (hide details) and share the calendar with the group, granting it Make changes to events permission.",
            "For each room, set the default organization access to See only free/busy (hide details), and configure the calendar’s settings to auto-accept invitations so that executives and assistants can join the group."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 28,
        category: "vault",
        text: "Your company is undergoing a regulatory compliance audit. As part of the audit, you are required to demonstrate that you can preserve all electronic communications related to a specific project for a potential legal discovery process. You need to configure Google Vault to accomplish this goal. What should you do?",
        options: [
            "Use the security investigation report to show Vault log events.",
            "Use the search and export functionality to identify all relevant communications within the project timeframe.",
            "Create a matter and a hold on all project-related data sources such as Email, Chat, and Drive within Google Workspace.",
            "Create a custom retention policy for the project data. Ensure that the policy covers the required retention period."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 29,
        category: "admin",
        text: "Several employees from your finance department are collaborating on a long-term, multi-phase project. You need to create a confidential group for this project as quickly as possible. You also want to minimize management overhead. What should you do?",
        options: [
            "Create a Google Group by using Google Cloud Directory Sync (GCDS) to automatically sync the members.",
            "Create a dynamic group and define the Department user attribute as a condition for membership with the value as the finance department.",
            "Create a Google Group and update the settings to allow anyone in the organization to join the group.",
            "Create a Google Group and appoint a group admin to manage the membership of this group."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 30,
        category: "directory",
        text: "Today your company signed up for Google Workspace Business Starter with an existing domain name. You want to add team members and manage their access to email and other services. However, you are unable to create new user accounts or change user settings. You need to fix this problem. What should you do?",
        options: [
            "Run the Transfer tool to bring unmanaged users to your Workspace account.",
            "Check domain ownership in the DNS settings.",
            "Wait 24 hours after signing up for the features to become active.",
            "Upgrade to a Google Workspace Enterprise edition."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 31,
        category: "vault",
        text: "A team of temporary employees left your organization after completing a shared project. Per company policy, you need to disable their Google Workspace accounts while preserving all project data and related communications in Google Vault for a minimum of two years. You want to comply with this policy while minimizing cost. What should you do?",
        options: [
            "Purchase and assign Archived User licenses to the former employees.",
            "Transfer the former employees’ files and data to active user accounts. Delete the former employees’ Workspace accounts.",
            "Purchase additional user licenses and suspend the former employees’ accounts.",
            "Move the former employees to their own organizational unit (OU) and disable access to Google services for that OU."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 32,
        category: "admin",
        text: "The legal department at your organization is working on a time-critical merger and acquisition (M&A) deal. They urgently require access to specific email communications from an employee who is currently on leave. The organization’s current retention policy is set to indefinite. You need to retrieve the required emails for the legal department in a manner that ensures data privacy. What should you do?",
        options: [
            "Instruct the IT department to directly access and forward the relevant emails to the legal department.",
            "Temporarily grant the legal department access to the employee’s email account with a restricted scope that is limited to the M&A-related emails.",
            "Ask a colleague with delegate access to the employee's mailbox to identify and forward the relevant emails to the legal department.",
            "Use Google Vault to create a matter specific to the M&A deal. Search for relevant emails within the employee's mailbox. Export and share relevant emails with your legal department."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 33,
        category: "admin",
        text: "Your company distributes an internal newsletter that contains sensitive information to all employees by email. You’ve noticed unauthorized forwarding of this newsletter to external addresses, potentially leading to data leaks. To prevent this, you need to implement a solution that automatically detects and blocks such forwarding while allowing legitimate internal sharing. What should you do?",
        options: [
            "Add a banner to the newsletter that warns users that external sharing is prohibited.",
            "Create a Gmail content compliance rule that targets the internal newsletter, identifying instances of external forwarding. Configure the rule to reject the message when such forwarding is detected",
            "Develop an Apps Script project by using the Gmail API to scan sent emails for the newsletter content and external recipients. Automatically revoke access for violating users.",
            "Create a content compliance rule to modify the newsletter subject line, adding a warning against external forwarding."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 34,
        category: "drive",
        text: "Your organization has hired temporary employees to work on a sensitive internal project. You need to ensure that the sensitive project data in Google Drive is limited to only internal domain sharing. You do not want to be overly restrictive. What should you do?",
        options: [
            "Configure the Drive sharing options for the domain to internal only.",
            "Restrict the Drive sharing options for the domain to allowlisted domains.",
            "Create a Drive DLP rule, and use the sensitive internal Project name as the detector.",
            "Turn off the Drive sharing setting from the Team dashboard."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 35,
        category: "admin",
        text: "Several employees at your company received messages with links to malicious websites. The messages appear to have been sent by your company’s human resources department. You need to identify which users received the emails and prevent a recurrence of similar incidents in the future. What should you do?",
        options: [
            "Search the sender’s email address by using Email Log Search. Identify the users that received the messages. Instruct them to mark them as spam in Gmail, delete the messages, and empty the trash.",
            "Search for the sender’s email address by using the security investigation tool. Mark the messages as phishing. Add the sender’s email address to the Blocked senders list in the Spam, Phishing and Malware setting in Gmail to automatically reject future messages.",
            "Collect a list of users who received the messages. Search the recipients’ email addresses in Google Vault. Export and download the malicious emails in PST file format. Add the sender’s email address to a quarantine list setting in Gmail to quarantine any future emails from the sender.",
            "Search for the sender’s email address by using the security investigation tool. Delete the messages. Turn on the safety options for spoofing and authentication protection in Gmail settings."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 36,
        category: "gmail",
        text: "Your organization’s users are reporting that a large volume of legitimate emails are being misidentified as spam in Gmail. You want to troubleshoot this problem while following Google-recommended practices. What should you do?",
        options: [
            "Adjust the organization’s mail content compliance settings in the Admin console.",
            "Advise users to individually allowlist senders.",
            "Disable spam filtering for all users.",
            "Contact Google Workspace support and report a suspected system-wide spam filter malfunction."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 37,
        category: "chrome",
        text: "Your organization’s security team has published a list of vetted third-party apps and extensions that can be used by employees. All other apps are prohibited unless a business case is presented and approved. The Chrome Web Store policy applied at the top-level organization allows all apps and extensions with an admin blocklist. You need to disable any unapproved apps that have already been installed and prevent employees from installing unapproved apps. What should you do?",
        options: [
            "Change the Chrome Web Store allow/block mode setting to allow all apps, admin manages blocklist, In the App access control card, block any existing web app that is not on the security team’s vetted list.",
            "Change the Chrome Web Store allow/block mode setting to block all apps, admin manages allowlist. Add the apps on the security team’s vetted list to the allowlist.",
            "Disable Extensions and Chrome packaged apps as Allowed types of apps and extensions for the top-level organizational unit. Selectively enable the appropriate extension types for each suborganization",
            "Disable the Chrome Web Store service for the top-level organizational unit. Enable the Chrome Web Store service for organizations that require Chrome apps and extensions."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 38,
        category: "security",
        text: "Your company handles sensitive client data and needs to maintain a high level of security to comply with strict industry regulations. You need to allow your company’s security team to investigate potential security breaches by using the security investigation tool in the Google Admin console. What should you do?",
        options: [
            "Create an activity rule that triggers email notifications to the security team whenever a high-risk security event occurs.",
            "Assign the User Management Admin role to the security team.",
            "Assign the super admin role to the security team",
            "Create an administrator role with Security Center access. Assign the role to the security team."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 39,
        category: "drive",
        text: "An end user has thousands of files stored in Google Drive. Their files are well organized with Drive labels. You need to advise the end user on how to quickly identify all files that are contracts. What should you do?",
        options: [
            "Advise the user to use the Google Drive API to search for files with the keyword “contracts”",
            "Advise the user to search in Drive for files with the keyword “contracts”, and use the “modified by me” filter.",
            "Advise the user to search for files that are labeled as “contracts”.",
            "Advise the user to use the Investigation tool to search for files with the keyword “contracts” and updated by you."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 40,
        category: "admin",
        text: "You’ve received multiple reports about a suspicious email from someone who is pretending to be from your organization’s human resources department. The email is prompting employees to click a link for a password update. You want to remediate this sender’s emails. What should you do?",
        options: [
            "Use the security investigation tool to search for users who received the suspicious email, and select Mark message as phishing.",
            "Use the security investigation tool to action the suspicious email and select Mark message as spam.",
            "Create an activity rule to alert administrators to similar emails from that sender.",
            "Notify all employees and request that they report this email as spam."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 41,
        category: "mobile",
        text: "Your company’s security team has requested two requirements to secure employees’ mobile devices-enforcement of a passcode and remote account wipe functionality. The security team does not want an agent to be installed on the mobile devices or to purchase additional licenses. Employees have a mix of iOS and Android devices. You need to ensure that these requirements are met. What should you do?",
        options: [
            "Implement a third-party enterprise mobility management (EMM) provider.",
            "Set up advanced mobile management for iOS devices and basic mobile management for Android devices.",
            "Set up basic management for both iOS and Android devices.",
            "Set up advanced management for both iOS and Android devices."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 42,
        category: "mobile",
        text: "Your organization needs an approval application for purchases where a user can enter information on the purchase required and then submit it for management approval. You need to suggest a solution to create the application that must be available on both the web and mobile devices. Your organization does not have software developers or the budget to hire a third party. What should you do?",
        options: [
            "Suggest that the organization develop an application internally with a database, a backend service for data retrieval, and a frontend service for the application’s user interface.",
            "Suggest that the organization continue to approve requests manually until budget is available to use a third-party application provider.",
            "Suggest the organization use AppSheet to create the application.",
            "Suggest that the organization use AppScript to create forms linked to a Google Sheet to store the purchase data."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 43,
        category: "security",
        text: "Your organization is concerned about unauthorized access attempts. You want to implement a security measure that makes users change their password if there are twenty or more failed login attempts within one hour. You want to use the most effective and efficient approach. What should you do?",
        options: [
            "Set up a Chrome action rule to restrict users from defined ChromeOS actions after twenty failed password attempts.",
            "Create an activity rule for user log events, define a time period and threshold, and select an Action for the rule to force a password change.",
            "Create an activity rule for live-state data sources that meets the required time period and threshold to identify users who need to change their password.",
            "Enable email alerts to notify users that they need to change their password."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 44,
        category: "directory",
        text: "An employee using a Workspace Enterprise Standard license was terminated from your organization. You need to ensure that the former employee no longer has access to their Workspace account and preserve access to the former employee’s documents for the manager and the team. You want to minimize license cost. What should you do?",
        options: [
            "Delete the former employee’s Workspace account.",
            "Suspend former employee’s Workspace account.",
            "Reset the password of the former employee and keep their Workspace license active.",
            "Switch the license type of the former employee’s Workspace account to an Archived User license."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 45,
        category: "meet",
        text: "Your organization's employees frequently collaborate with external clients and vendors by using Google Meet. There are active instances of unsupervised meetings within your organization that do not have a host, and unsupervised meetings that continue after an event has completed. You want to end all meetings that are being used inappropriately as quickly as possible. What should you do?",
        options: [
            "End all unsupervised meetings by using the Google Meet APIs.",
            "Enable Host Management for Google Meet, and train internal host employees how to end meetings for everyone.",
            "Turn off Google Meet in the Admin console for your organization. Turn Google Meet back on after two minutes.",
            "Identify and end all unsupervised meetings by using the security investigation tool."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 46,
        category: "meet",
        text: "Your organization uses live-streaming to host large Google Meet meetings. You need to limit the participation to affiliated Google Workspace domains by using the Admin console. What should you do?",
        options: [
            "Add the Trusted Workspace domain names in the Stream dialog box.",
            "Turn off live streaming to Youtube.",
            "Add participants to an organizational unit (OU). Turn on live streaming.",
            "Turn on in-house live streaming. Invite users from affiliated domains."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 47,
        category: "admin",
        text: "You are configuring email for your company’s Google Workspace account. The company wants to prevent certain types of files from being sent or received as email attachments in the simplest and most cost-effective way. What should you do?",
        options: [
            "Adjust the maximum message size limit to prevent large files from being sent or received.",
            "Enable the Security Sandbox in Gmail to automatically quarantine emails with suspicious attachments.",
            "Scan all incoming and outgoing emails for malicious attachments by using an industry standard third-party email security solution.",
            "Configure an attachment compliance rule in Gmail settings to block specific file types."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 48,
        category: "drive",
        text: "Your organization has a Shared Drive with 150 users organized as a group. All users of the group need to be able to add and edit files, but the ability to move, delete, and share content must be limited to a single user. You need to configure the shared drive to meet these requirements efficiently. What should you do?",
        options: [
            "Create a folder inside the shared drive. Share the files with the group by using the share function.",
            "Create a folder inside the shared drive. Share the folder link with the group.",
            "In the Admin console, assign Contributor access for the shared drive to each user. Assign Content Manager access for the shared drive to the single user.",
            "In the Admin console, assign Contributor access for the shared drive to the group. Assign Content Manager access for the shared drive to the single user."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 49,
        category: "chat",
        text: "Your company wants to minimize distractions and inappropriate content in their Google Chat spaces. You need to give trusted employees the ability to remove messages and ban users from specific Chat spaces. What should you do?",
        options: [
            "Assign the trusted employees as moderators for the relevant Chat spaces.",
            "Create a data loss prevention (DLP) rule that blocks inappropriate content from being shared",
            "Use the security investigation tool to audit and monitor Chat messages.",
            "Disable all Chat spaces except those specifically approved by management."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 50,
        category: "directory",
        text: "Your organization acquired a small agency. You need to create user accounts for these new employees. The new users must be able to use their new organization’s email address and their email address with the sub-agency domain name. What should you do?",
        options: [
            "Redirect the acquired domain to Google’s MX records and add the account as a “send as” address.",
            "Set up the acquired agency as a secondary domain from the Manage domains page.",
            "Set up the acquired agency as a user alias domain from the Manage domains page.",
            "Set up the acquired agency as a secondary domain and swap it to the primary domain."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 51,
        category: "directory",
        text: "The current data storage limit for the sales organizational unit (OU) at your company is set at 10GB per user. A subset of sales representatives in that OU need 100GB of storage across shared services. You need to increase the storage for only the subset of sales representatives by using the least disruptive approach and the fewest configuration steps. What should you do?",
        options: [
            "Move the subset of users to a sub-OU, and assign a 100GB storage limit to that sub-OU.",
            "Instruct the subset of users to store their documents in a Shared Drive with a 100GB limit.",
            "Change the storage limit of the sales OU to 100GB.",
            "Create a configuration group, and add the subset of users to that group. Set the group storage limit to 100GB."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 52,
        category: "drive",
        text: "Your company’s security team should be able to investigate unauthorized external file sharing. You need to ensure that the security team can use the security investigation tool and you must follow the principle of least privilege. What should you do?",
        options: [
            "Grant the super admin role to a delegate from the security team.",
            "Create a pre-built reporting role. Assign the role to the security team alias.",
            "Share the Drive audit log with the security team.",
            "Create a custom admin role with security center privileges. Assign the role to the individual security team members."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 53,
        category: "gmail",
        text: "Users at your company are reporting that they are not receiving some emails in their corporate Gmail account. You have checked the Google Workspace Status Dashboard and you found no service disruptions. You need to identify the root cause of the problem and resolve the mail delivery issues. What should you do? (Choose two.)",
        options: [
            "Use Email Log Search (ELS) to identify specific delivery failures.",
            "Verify whether the organization’s Mail Exchange (MX) records are correctly configured.",
            "Check the users’ spam folders to determine whether emails are being misdirected.",
            "Investigate the Gmail log events for error messages or unusual patterns.",
            "Check the senders’ IP addresses in the inbound mail gateway."
        ],
        correctIndex: [0, 1],
        explanation: "The correct answer is A, B."
    },
    {
        id: 54,
        category: "drive",
        text: "You are designing a group structure for your company that will be used to grant access to a specific shared drive. You need this solution to automatically add and remove employees based on their job role. What should you do?",
        options: [
            "Create a security group. Add all employees with the desired job role. Grant the security group access to the shared drive.",
            "Create a distribution list. Add all employees with the desired job role. Grant the distribution list access to the shared drive.",
            "Create a dynamic group. Set the membership criteria to the desired job role. Grant the dynamic group access to the shared drive.",
            "Create a configuration group. Add users on an exception basis. Grant the configuration group access to the shared drive."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 55,
        category: "admin",
        text: "An executive at your organization asked you to give their executive administrator access to their Workspace account. You need to ensure that this executive administrator can manage emails in the executive’s account. You need to maintain security and privacy of the executive’s account. What should you do?",
        options: [
            "Assist the executive in setting up email forwarding to their executive administrator.",
            "Instruct the executive to share their password with their executive administrator.",
            "Create a Google Group, and add all executive administrators. Enable delegated access to the Group.",
            "Grant delegated access to the executive’s Gmail account, and assign access to their executive administrator in Gmail settings."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 56,
        category: "calendar",
        text: "The innovation team at your organization has a dedicated room with prototype equipment. You need to make the room bookable, add the equipment, and ensure that there are no booking conflicts. Only the innovation team and the sales directors can access this room. What should you do?",
        options: [
            "Create a separate Google Calendar resource for the room. Manually manage booking requests from both teams.",
            "Create a Google Group for the innovation team and another Google Group for sales directors. Share the room’s calendar with both groups.",
            "Create a Google Calendar event for the room. Share the event with the innovation team and sales directors.",
            "Edit the Google Calendar settings for the room resource. Adjust the permission settings so only the innovation team and sales director group can view and book time on this calendar."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 57,
        category: "admin",
        text: "You work for a healthcare provider that uses an external medical billing company to manage patient records and invoices. Your organization’s employees need to share patient documents with the billing company’s employees for processing. You need to configure access so the medical billing company’s employees can view and edit the documents, but they cannot delete the documents. What should you do?",
        options: [
            "Create a shared drive that is managed by your organization’s employees. Grant Contributor access to the billing company’s staff.",
            "Create a shared drive. Grant Content Manager access to your organization’s employees and the billing company.",
            "Create a group, and add the employees from your organization and the billing company. Create a shared folder on Google Drive. Grant Editor access to the group",
            "Restrict access for the medical billing company’s employees by using Data Loss Prevention (DLP) policies."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 58,
        category: "migration",
        text: "You are migrating your organization’s email to Google Workspace. Your organization uses the terramearth.com email domain. You need to configure Google Workspace to receive emails sent to terramearth.com. What should you do?",
        options: [
            "Add terramearth.com as a primary, secondary, or alias domain in Google Workspace. Update the Mail Exchange (MX) records with your domain registrar to direct mail flow to Google’s mail servers.",
            "Establish a Transport Layer Security (TLS) connection between your company’s existing mail servers and Google’s mail servers",
            "Configure an email address in Google Workspace to capture emails sent to unverified domains, including terramearth.com.",
            "Create a domain alias for terramearth.com in Google Workspace. Configure email forwarding to redirect emails to the new Google Workspace accounts."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 59,
        category: "gmail",
        text: "Your organization is migrating their current on-premises email solution to Google Workspace. You need to ensure that emails sent to your domain are correctly routed to Gmail. What should you do?",
        options: [
            "Change the Mail Exchange (MX) records in your current email domain’s DNS settings to point to Google’s mail servers.",
            "Set up email forwarding from your on-premises email provider to Gmail.",
            "Create a content compliance rule to filter and route incoming emails.",
            "Configure SPF, DKIM, and DMARC records in your current email domain’s DNS settings."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 60,
        category: "admin",
        text: "Your compliance team has observed that employees at your organization are frequently resetting their passwords and is concerned about account hijacking. You need to create a solution to notify the compliance team whenever a user updates or resets their password. What should you do?",
        options: [
            "Create and enforce a new password policy for all users in your organization.",
            "Move all compliance team members into a separate organizational unit (OU). Create and enforce a new password policy for the members of this OU.",
            "Create an activity rule that is triggered by the User’s password changed event. Add compliance team members as email recipients.",
            "Create a new alert by using user log events. Check that the challenge type is “Password”, and add the compliance team as email recipients."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 61,
        category: "calendar",
        text: "Multiple users in your organization are reporting that Calendar invitations sent from a specific department are not being received. You verified that the invitations are being sent and there are no error messages in the sender’s logs. You want to troubleshoot the issue. What should you do?",
        options: [
            "Analyze the message headers of the sent invitations by using the Google Admin Toolbox to identify any delivery issues.",
            "Verify that the senders in the specific department have the necessary permissions to share their calendars externally and send invitations outside of the organization.",
            "Disable and re-enable the Calendar service for the affected users to refresh their connection.",
            "Check the affected users’ Calendar settings to confirm whether they have accidentally blocked invitations from the specific department."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 62,
        category: "calendar",
        text: "The names and capacities of several conference rooms have been updated. You need to use the most efficient way to update these details. What should you do?",
        options: [
            "Export the resource list to a CSV file, make the changes, and re-import the updated file.",
            "Edit each resource in the Google Admin console.",
            "Add the modified rooms as new resources. Tell employees not to use old rooms.",
            "Delete the existing resources and recreate the resources with the updated information."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 63,
        category: "chrome",
        text: "You are configuring Chrome browser security policies for your organization. These policies must restrict certain Chrome apps and extensions. You need to ensure that these policies are applied on the devices regardless of which user logs into the device. What should you do?",
        options: [
            "Configure the allowed list of apps in the Devices page in the apps and extensions settings.",
            "Configure the Chrome user setting to require users to sign in to use Chrome apps and extensions.",
            "Configure the Policy Precedence to override the domain-wide policy applied for apps and extensions.",
            "Require 2SV for user logins."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 64,
        category: "gmail",
        text: "Your company’s help desk is receiving technical support tickets from employees who report that messages from known external contacts are being sent to the spam label in Gmail. You need to correct the issue and ensure delivery of legitimate emails without introducing additional risk as soon as possible. What should you do?",
        options: [
            "Ask employees to select the messages in Gmail that are being delivered to spam and mark them as Not spam.",
            "Contact the external senders, and tell them to authenticate their sent mail by using domain-based message authentication, reporting, and conformance (DMARC).",
            "Turn off more aggressive spam filtering in spam policies that are applied to the users’ organizational unit and add the senders’ mail system IP addresses to the email allowlist.",
            "Create an address list of approved senders so messages from these users bypass Gmail’s spam filters and recipients can decide whether they are spam or not."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 65,
        category: "admin",
        text: "A user in your organization received a spam email that they reported for further investigation. You need to find out more details and the scope of this incident as quickly as possible. What should you do?",
        options: [
            "Conduct a Vault search to find this email and identify if additional users were affected.",
            "Conduct a search to find all emails sent by the sender by using the Gmail API.",
            "Conduct an Email reports search to find this email and all of the email’s recipients.",
            "Conduct a search in the security investigation tool to find this email, and identify whether additional users were affected."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 66,
        category: "workspace",
        text: "You work at a large organization that prohibits employees from using Google Sites. However, a task force comprised of three people from five different departments has recently been formed to work on a project assigned by the Office of the CIO. You need to allow the users in this task force to temporarily use Google Sites. You want to use the least disruptive and most efficient approach. What should you do?",
        options: [
            "Turn Google Sites access on for each of the 15 users in the task force.",
            "Create a configuration group for the task force’s 15 users. Grant Google Sites access to the group.",
            "Place the 15 task force users into a new organizational unit (OU). Turn on Google Sites access for the OU.",
            "Create an access group for the task force’s 15 users. Grant Google Sites access to the group."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 67,
        category: "drive",
        text: "Your organization collects credit card information in customer files. You need to implement a policy for your organization’s Google Drive data that prevents the accidental sharing of files that contain credit card numbers with external users. You also need to record any sharing incidents for reporting. What should you do?",
        options: [
            "Create a data loss prevention (DLP) rule that uses the predefined credit card number detector, sets the action to “block external sharing”, and enables the “Log event” option.",
            "Enable Gmail content compliance, and create a rule to block email attachments containing credit card numbers from being sent to external recipients.",
            "Implement a third-party data loss prevention solution to integrate with Drive and provide advanced content detection capabilities.",
            "Configure a data retention policy to automatically delete files containing credit card numbers after a specified period."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 68,
        category: "admin",
        text: "You are investigating a potential data breach. You need to see which devices are accessing corporate data and the applications used. What should you do?",
        options: [
            "Analyze the audit log in the Admin console for device and application activity.",
            "Analyze the security investigation tool to access device log data.",
            "Analyze the Google Workspace reporting section of the Admin console.",
            "Analyze the User Accounts section in the Google Admin console."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 69,
        category: "gmail",
        text: "Your organization is implementing a new customer support process that uses Gmail. You need to create a cost-effective solution that allows external customers to send support request emails to the customer support team. The requests must be evenly distributed among the customer support agents. What should you do?",
        options: [
            "Create a Google Group, enable collaborative inbox settings, set posting permissions to “Anyone on the web”, and add the customer support agents as group members.",
            "Use delegated access for a specific email address that represents the customer support group, and add the customer support team as delegates for that email address.",
            "Create a Google Group, add the support agents to the group, and set the posting permissions to “Public.”",
            "Set up an inbox for the customer support team. Provide the login credentials to the customer support team."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 70,
        category: "directory",
        text: "Your organization has enabled Google Groups for Business to let employees create and manage their own email distribution lists and web forums. You need to ensure that users cannot join external Google Groups with their Google Workspace accounts without interrupting internal group usage. What should you do?",
        options: [
            "Set the setting for Google Groups for Business called Accessing groups from outside this organization to Private.",
            "In Additional Google Services, turn Google Groups OFF at the root organizational unit.",
            "Use the Directory API to change the settings of user-created groups to disable features that allow external users to access, view, or post on groups.",
            "Set the setting for Google Groups for Business called Default for permission to view conversations to All organization users."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 71,
        category: "chrome",
        text: "You manage Chrome Enterprise browsers for your large organization. You want to ensure that specific extensions are automatically installed on all managed Chrome Enterprise browsers. What should you do?",
        options: [
            "Allowlist the specific Chrome browser extensions.",
            "Configure a script to deploy the extensions upon user login.",
            "Publish the extensions in the Chrome Web Store.",
            "Force-install the extensions through Chrome browser policies."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 72,
        category: "workspace",
        text: "You need to grant a specific set of users in your company access to YouTube, and you want to restrict their access to Merchant Center. What should you do?",
        options: [
            "Enable YouTube for all users in the company. Individually restrict access to Merchant Center for specific Groups or organizational units (OUs).",
            "Create YouTube and Merchant Center as custom web apps. Apply access policies at the Group or organizational unit (OU) level.",
            "Contact Google Support and request that they enable YouTube access for the specific set of users and restrict their access to Merchant Center.",
            "Enable access to YouTube at the Group or organizational unit (OU) level for the subset of users. Disable access to Merchant Center."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 73,
        category: "gmail",
        text: "Your organization is about to conduct its biannual risk assessment. You need to help identify security risks by quickly reviewing all security settings for Gmail, Drive, and Calendar. What should you do?",
        options: [
            "In the reporting section of the Admin console, review the Gmail, Drive, and Calendar reports.",
            "In the alert center, review all of the alerts.",
            "In each individual organizational unit (OU), review the security settings.",
            "In the Google Admin console, review the security health page."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 74,
        category: "vault",
        text: "You need to ensure that data owned by former employees remains available in Google Vault. You want to use the most cost-effective solution. What should you do?",
        options: [
            "Migrate the former employees’ Gmail to their manager(s) by using the data migration service during the deletion process. Transfer the former employees’ Google Drive files to a new owner.",
            "Change the Google account passwords of the former employees.",
            "Suspend the former employees’ Google accounts. Create an organizational unit (OU). Move the former employees into that OU.",
            "Assign an Archived User license to the former employees’ Google accounts."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 75,
        category: "gmail",
        text: "A user is experiencing intermittent issues accessing their Gmail inbox. Sometimes their Gmail loads slowly, and other times the user encounters error messages that haven’t been documented. You need to effectively troubleshoot this recurring problem. What should you do?",
        options: [
            "Check the Google Workspace Status Dashboard for any reported service disruptions.",
            "Instruct the user to generate a HAR file the next time they experience slowness or an error.",
            "Instruct the user to try to access Gmail from another device or network to see if the issue persists.",
            "Instruct the user to clear their browser cache and cookies."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 76,
        category: "calendar",
        text: "You are managing the buildings and resources for your organization. You need to create several conference rooms with a capacity of 10 people each, equipped with a whiteboard and projector, and wheelchair accessible. You want to ensure the process is efficient. What should you do?",
        options: [
            "Automate room creation by using a third-party app from the Google Workspace Marketplace.",
            "Create a CSV file and add all resources. Write a script using the Workspace API to reference the CSV file and create all the resources.",
            "Create each conference room individually in the Google Admin console. Add the features for each room.",
            "Use the Google Admin console to bulk upload the rooms. Create a resource with the specified features and apply the features to that resource."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 77,
        category: "mobile",
        text: "Your organization allows employees to use their personal mobile devices to check their work emails. You need to remove the employee’s work email data from their phone when they leave the organization. What should you do?",
        options: [
            "Set up basic mobile management on the devices.",
            "Set up advanced mobile management on the devices.",
            "Set up data protection rules to prevent data sharing externally.",
            "Set up 2SV authentication on the devices."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 78,
        category: "admin",
        text: "External sharing at your company is only permitted for the sales and marketing department. Engineering is not allowed to share externally. You need to configure the sharing settings to comply with this policy. What should you do?",
        options: [
            "Use a data loss prevention (DLP) solution to control external sharing based on user groups.",
            "Create separate shared drives for each department with different external sharing settings.",
            "Create organizational units (OUs) for each department. Configure different external sharing settings for each OU.",
            "Configure Drive trust rules to restrict the engineering department from sharing externally."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 79,
        category: "directory",
        text: "Your company has purchased Gemini licenses for a subset of employees. You need to ensure that only users in the marketing and sales departments have access to Gemini features by using the most efficient approach. What should you do?",
        options: [
            "Create a script to assign a Gemini license to new users if they are in marketing or sales. Run the script daily.",
            "Create an organizational unit (OU) for marketing and sales. Assign the Gemini licenses to that OU, and enable Gemini for that OU only.",
            "Assign Gemini licenses to each user in the marketing and sales departments.",
            "Enable Gemini for the entire organization. Instruct users in other departments not to use Gemini."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 80,
        category: "security",
        text: "Your company wants to enable single sign-on (SSO) for its employees to access a newly acquired cloud-based marketing platform. The marketing platform vendor has confirmed SAML 2.0 compatibility and provided the necessary metadata. You need to streamline user access and centralize authentication through Google Workspace. What should you do?",
        options: [
            "Request an API key from the marketing platform vendor for SAML integration.",
            "Enable two-factor authentication for all users to enhance security before implementing SSO.",
            "Instruct employees to log in to the marketing platform using the Sign In with Google functionality.",
            "Create a new SAML application in the Google Admin console."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 81,
        category: "drive",
        text: "Your organization handles a significant amount of sensitive customer data and must follow strict industry regulations. To meet an upcoming compliance deadline, you need to quickly implement a solution that automatically classifies files stored in Google Drive based on the content of files. What should you do?",
        options: [
            "Create data loss prevention (DLP) rules for Drive. Configure the rules to apply Drive labels based on content.",
            "Apply Drive labels based on content. Use Google Vault to create retention rules based on Drive labels, ensuring that data is kept for the required duration.",
            "Implement a third-party data governance tool that integrates with Drive and provides advanced classification capabilities.",
            "Add users into organizational units (OUs). Configure default file classification in Drive for the desired OUs."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 82,
        category: "chrome",
        text: "Your company provides shared Chromebook workstations for employees to access sensitive company data. You must configure the devices to ensure no sensitive data is stored locally and that browsing data is cleared after each use. What should you do?",
        options: [
            "Force ephemeral mode in Chrome. Disable offline access for sensitive Workspace apps like Docs, Sheets, and Drive.",
            "Enable the Manage Guest Session functionality, and set the maximum user session length.",
            "Force ephemeral mode in Chrome. Allow offline access for all Workspace apps with strict expiration times.",
            "Disable offline access for all Workspace apps. Enable incognito mode for Chrome browsing sessions."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 83,
        category: "meet",
        text: "A new user at your organization is unable to access Google Meet. You have verified that the user’s account is active and the correct licenses are assigned. You need to resolve the access issue. What should you do?",
        options: [
            "Check the user’s browser settings to ensure that Meet is not blocked.",
            "Instruct the user to clear their browser’s cache and cookies.",
            "Restart the user’s computer to refresh their network connection.",
            "Verify that Meet is enabled as a service for the user’s account in the Admin console."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 84,
        category: "meet",
        text: "During a recent Google Meet video conference, several employees reported that they could not hear the presenters. The presenters confirmed that their laptops’ microphones were working. The affected employees were all using company-issued laptops. You need to quickly diagnose the source of the issue. What should you do first?",
        options: [
            "Verify that the audio drivers on the affected laptops are up-to-date and functioning correctly.",
            "Check the Admin console to determine whether there are recent Meet-related notifications or alerts.",
            "Check if Context-Aware access rules were set to prevent Meet access from the user’s network location.",
            "Use the Meet quality tool for each affected user to analyze their microphone settings and configurations during the meeting."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 85,
        category: "admin",
        text: "Your company’s legal department has issued a litigation hold that requires you to preserve all data related to a specific project. You need to ensure that all data for this project, including emails, documents, and chats, are preserved indefinitely and cannot be deleted by users. What should you do?",
        options: [
            "Create a hold in Google Vault that includes all users and data sources associated with the project.",
            "Assign an Archived User license to all users involved in the project.",
            "Set up a retention rule in Google Vault that retains all data from Gmail and Drive indefinitely.",
            "Export all project related data from Google Workspace and store the data in a separate, secure location."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 86,
        category: "mobile",
        text: "Your organization allows employees to use their personal devices for work purposes. You want to ensure these devices follow the company’s security policies. You need to choose a mobile management solution that provides minimal passcode enforcement and allows for an admin to remotely wipe a user’s account from the device. You also want to avoid having to install agents on employees’ personal devices. What should you do?",
        options: [
            "Implement Google’s advanced management on mobile devices.",
            "Implement Google’s basic management on mobile devices.",
            "Enforce a strong password policy, and enforce the password policy at the next sign-in.",
            "Deploy a third-party mobile device management (MDM) solution."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 87,
        category: "drive",
        text: "An employee is leaving your company and has numerous files stored in My Drive. Their manager wants to retain access to these files. You need to offboard the departing employee’s Google Workspace account while ensuring that the manager can still access the files while following Google-recommended practices. What should you do?",
        options: [
            "Use Google Vault to establish a retention policy for the organizational unit (OU) of the departing employee. Assign the Google Archived User license.",
            "Instruct the departing employee to share their My Drive folder with the manager before leaving. Delete the Google Workspace account on the departing employee’s last day.",
            "Download the departing employee’s Drive data by using Google Takeout. Upload the data to the manager’s Drive before deleting the departing employee’s Google Workspace account.",
            "Transfer ownership of the departing employee’s files to the manager during the user deletion process."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 88,
        category: "mobile",
        text: "You need to create an automated application or process that includes connectors to external data, leverages Google Sheets data, and is easily shared as a mobile application. What should you do?",
        options: [
            "Create an application by using App Engine. Connect the application to your Workspace environment",
            "Copy the external data to BigQuery. Use a Connected Sheet to interact with the data.",
            "Create an AppSheet application to connect the different data sources. Set up the mobile application.",
            "Create an automation process by using Apps Script. Run the process through Google Sheets."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 89,
        category: "gmail",
        text: "Your organization recently deployed Google Workspace. Over 3,000 external contacts were shared in public folders in Microsoft Exchange before the implementation. You need to ensure that these external contacts appear to domain users in Gmail. What should you do?",
        options: [
            "Export the external contacts to a CSV file, upload the file to Google Drive, and instruct users to import to their My Contacts.",
            "Use Google Cloud Directory Sync to sync the external contacts from the public folders in Microsoft Exchange to the Directory.",
            "Use the Domain Shared Contacts API to add the external contacts to the Directory.",
            "Create a user account, add the external contacts, and delegate them to all users in the domain."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 90,
        category: "directory",
        text: "Your organization has experienced a recent increase in unauthorized access attempts to your company’s Google Workspace instance. You need to enhance the security of user accounts while following Google-recommended practices. What should you do?",
        options: [
            "Disable password recovery options to prevent unauthorized individuals from accessing user accounts.",
            "Implement a strong password policy and enable text messages as the 2-Step Verification (2SV) using text messages.",
            "Enforce the use of physical security keys as the 2-Step Verification (2SV) method for all users.",
            "Enforce a strong password policy that requires users to include special characters, numbers, and uppercase letters."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 91,
        category: "security",
        text: "Your company operates several primary care clinics where employees routinely work with protected health information (PHI). You are in the process of transitioning the organization to Google Workspace from a legacy communication and collaboration system. After you sign the Business Associate Agreement (BAA), you need to ensure that data is handled in compliance with regulations when using Google Workspace. What should you do?",
        options: [
            "Implement a third-party backup service that is also compliant with Google Workspace core services.",
            "Create a label for Google Drive content to help employees identify sensitive data.",
            "Instruct the staff to not store any PHI in Google Workspace core services, including Google Drive, Docs, Sheets, and Keep.",
            "Disable integrations with third-party apps and turn off non-core Google services."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 92,
        category: "mobile",
        text: "You are onboarding a new employee who will use a company-provided Android device. Your company requires the ability to enforce strong security policies on mobile devices, including password complexity requirements and remote device wipe capabilities. You need to choose the appropriate Google Workspace mobile device management solution. What should you do?",
        options: [
            "Use a third-party mobile device management (MDM) solution to manage the device.",
            "Allow the employee to use their personal device without enrolling it in any mobile device management (MDM) solution.",
            "Implement Google’s basic management solution for the mobile device.",
            "Implement Google’s advanced management solution for the mobile device."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 93,
        category: "chat",
        text: "You are configuring Google Chat for your organization. Using the Adin console, you want to enable employees to view their chat history by default and allow employees to turn off chat history. What should you do?",
        options: [
            "Configure Google Vault to retain all Chat messages, and exclude organizational units (OUs) with users who want to turn Chat history off.",
            "Set the space history setting to OFF and chat history to ON.",
            "Set the top-level default conversation history setting to ON and allow users to change their history setting.",
            "Set the top-level default conversation history settings to OFF and allow users in each organizational unit (OU) to change their history setting."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 94,
        category: "admin",
        text: "Your company wants to start using Google Workspace for email. Your domain is verified through a third-party provider. You need to route the email to Google Workspace. What should you do?",
        options: [
            "Change your domain’s A record to point to Google’s mail servers.",
            "Configure a forwarding rule in your current email system to redirect all messages to Gmail.",
            "Update your domain’s MX records to the Google Workspace MX records provided in the setup instructions.",
            "Create a CNAME record that maps your domain to “gmail.com.”"
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 95,
        category: "gmail",
        text: "You’ve noticed an increase in phishing emails that contain links to malicious files hosted on external Google Drives. These files often mimic legitimate documents and trick users into granting access to their accounts. You need to prevent users from accessing these malicious external Drive files, but allow them to access legitimate external files. What should you do? (Choose two.)",
        options: [
            "Enforce stricter password policies.",
            "Conduct regular security awareness training to educate users.",
            "Create a Drive trust rule that blocks all external domains except for a pre-approved list of trusted partners.",
            "Deploy advanced malware detection software on all user devices to scan and block malicious files.",
            "Implement two-factor authentication for all users."
        ],
        correctIndex: [1, 2],
        explanation: "The correct answer is B, C."
    },
    {
        id: 96,
        category: "chrome",
        text: "A user accessing sensitive data is experiencing repeated issues with accessing certain files in Google Drive from their laptop by using the Chrome browser. When you contact Google support, the support representative asks to review an HTTP archive file recording (HAR). You need to share logs with Google support without compromising data privacy. What should you do?",
        options: [
            "Open the HAR file in a text editor and delete sensitive information. Upload the HAR file to Google Drive and share the file only with the Google support representative",
            "Ask the Google support representative for access to a Google Drive folder used by the Google support team. Upload the HAR file.",
            "Share your screen with the Google support representative so they can view the file without having a copy of the file.",
            "Upload the HAR file to Google Drive and share the file with the Google support representative."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 97,
        category: "directory",
        text: "Per regulatory requirements, your company is required to keep the data of employees located in Germany within Europe and the data of employees located in the US within the US. The employees in Germany are in a separate organizational unit (OU) than employees in the US. You need to ensure that where employee data is stored is in compliance with the location regulations. What should you do?",
        options: [
            "Instruct employees to use Drive for desktop to keep documents on their corporate computers.",
            "Create two Groups. Assign employees into the Germany or US Group based on their location. Use Google Drive trust rules to prevent sharing between the Groups.",
            "Navigate to the Data Regions function in the Admin console. Select the Europe region for employees in Germany, and select the US region for US employees.",
            "Navigate to the Data Regions function in the Admin console. Select “No preference.”"
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 98,
        category: "admin",
        text: "Your organization is increasingly concerned about its environmental impact. You want to assess the environmental impact of using Google Workspace services. Which report should you use?",
        options: [
            "Google Environmental Report",
            "Carbon footprint report",
            "Apps Monthly Uptime report",
            "Accounts report"
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 99,
        category: "calendar",
        text: "A user in your organization reported that their internal event recipient is not receiving the Calendar event invites. You need to identify the source of this problem. What should you do?",
        options: [
            "Check whether the business hours are set up in the event recipient's Calendar settings.",
            "Check if Calendar service is turned off for the event creator",
            "Check whether the Calendar event has more than 50 guests.",
            "Check whether the event recipient has turned off their email notifications for new events in their Calendar settings."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 100,
        category: "admin",
        text: "You are applying device and user policies for employees in your organization who are in different departments. You need each department to have a different set of policies. You want to follow Google-recommended practices. What should you do?",
        options: [
            "Add all managed users and devices in the top-level organizational unit.",
            "Create an Access group for each department Configure the applicable policies.",
            "Create a child organizational unit for each department.",
            "Create separate top-level organizational units for each department."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 101,
        category: "admin",
        text: "You are employed at a multinational organization with offices around the world. You want to ensure that employees in each region receive region-specific emails in a timely manner with minimal administrative burden. When new employees are hired in each region, you want to automate the email distribution process so that staff changes are reflected quickly. What should you do?",
        options: [
            "Create a Google Group for each region and add the respective employees to the appropriate group.",
            "Create a security group for each region and apply the location label to allow employees to join based on their region.",
            "Create a dynamic group for each region by setting the location as a condition.",
            "Create a Google Group for each region and set permissions that allow employees to discover and join the groups."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 102,
        category: "gmail",
        text: "You are configuring Gmail for your company and want to implement a layered security approach. You decide to implement industry-standard email authentication protocols. What should you do? (Choose two.)",
        options: [
            "Disable IMAP for your organization to prevent external clients from accessing Gmail",
            "Set up SPF records to specify authorized mail servers for your domain",
            "Configure DKIM to digitally sign outbound emails and verify their origin",
            "Configure a blocked senders rule to block all emails from unknown senders",
            "Enable a default email quarantine for all users to isolate suspicious emails and determine if the messages haven't been authenticated."
        ],
        correctIndex: [1, 2],
        explanation: "The correct answer is B, C."
    },
    {
        id: 103,
        category: "admin",
        text: "Your company has recently purchased a new domain name to use for the corporate email addresses. However, you are unable to access certain features in Google Workspace because the domain is not verified. You need to verify the domain. What should you do?",
        options: [
            "Contact Google support and request manual verification.",
            "Request a TXT record be added to the DNS zone by your domain registrar.",
            "Purchase an SSL certificate for your domain.",
            "Add an MX record to your DNS zone that points to Google Workspace."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 104,
        category: "admin",
        text: "An employee at your organization may be sharing confidential documents with unauthorized external parties. You must quickly determine if any sensitive information has been leaked. What should you do?",
        options: [
            "Review the employee's Drive log events in the security investigation tool.",
            "Create a custom report of the user's external sharing by using the security dashboard.",
            "Review the employee's user log events within the security investigation tool.",
            "Audit Drive access by using the Admin SDK Reports API."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 105,
        category: "workspace",
        text: "Your company has just started using Search Ads 360. You need to limit access to Additional Google services for your entire organization by using the Admin console. Only the marketing team and a specific group of users from the web design team should have access. What should you do?",
        options: [
            "Enable Search Ads 360 at the top level of your organizational structure.",
            "Enable Search Ads 360 for the marketing organizational unit (OU). Create a new group in the Admin console that includes the web design team users who need access. Enable Search Ads 360 for that group.",
            "Enable Search Ads 360 for both the marketing and web design team organizational units (OUs). Create a group to explicitly deny access to Search Ads 360. Assign the group to the web design users who should not have access.",
            "Enable Search Ads 360 for the marketing organizational unit (OU). Create a sub-OU under the marketing OU. and move the web design team users who need access into this sub-OU."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 106,
        category: "drive",
        text: "You are configuring data governance policies for your organization's Google Drive. You need to ensure that employees in the Research and Development department can share files with external users, while employees in the Finance department are blocked from sharing any files externally. What should you do?",
        options: [
            "Create a Drive trust rule that allows external sharing for the Research and Development organizational unit (OU) and another rule that blocks external sharing for the Finance OU.",
            "Apply an organization-wide data loss prevention (DLP) rule that scans for sensitive information and prevents external sharing of those files. Apply that rule to the Finance organizational unit (OU).",
            "Create a separate Google Workspace domain for the Finance organizational unit (OU) and disable external sharing for that domain.",
            "Enable Vault for the Finance organizational unit (OU) to ensure that all files shared externally are retained and auditable."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 107,
        category: "workspace",
        text: "A department at your company wants access to the latest Al-powered features in Google Workspace. You know that Gemini offers advanced capabilities and you need to provide the department with immediate access to Gemini's features while retaining control over its deployment to ensure that corporate data is not available for human review. What should you do?",
        options: [
            "Enable Alpha features for the organization and assign Gemini licenses to all users.",
            "Monitor Gemini adoption through the administrator console and wait for wider user adoption before assigning licenses.",
            "Enable Gemini for the department's organizational unit and assign Gemini licenses to users in the department.",
            "Enable Gemini for non-licensed users in that department so they have immediate access to the free service."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 108,
        category: "workspace",
        text: "Your organization wants to provide access to YouTube to a select group of users for educational purposes, while restricting YouTube access for all other users. You need to implement a solution that allows for granular control over YouTube access based on user roles or groups. What should you do?",
        options: [
            "Configure a SAML application to manage YouTube access for different user groups",
            "Deploy a Chrome extension from the Google Workspace Marketplace that blocks YouTube for users who are not in the select user group.",
            "Use organizational units (OUs) to apply a policy that restricts YouTube access and create an exception for the select group of users.",
            "Instruct the select group of users to switch to their personal Google account when accessing YouTube."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 109,
        category: "chrome",
        text: "You notice an increase in support cases related to Chrome browser within your organization. You suspect a potential outage or service disruption with Chrome browser. You need to determine whether any information has been released about the issue and if there are any projected timelines for its resolution. What should you do first?",
        options: [
            "Use the Help Assistant within the Google Admin console to identify if there was a recent outage",
            "Collect a HAR file and use the Google Admin Toolbox to identify potential failures.",
            "Log a case with Chrome Enterprise support.",
            "Review the Google Workspace Status Dashboard"
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 110,
        category: "directory",
        text: "An employee with a Workspace Business Plus license at your company is going on a long leave soon. The employee will not need access to their Google Workspace data, but their teammates will need access to the employee's data. When the employee returns from leave, you will need to restore access to their account, data, emails, and shared documents. You need to preserve the employee's Workspace data while also minimizing cost while they are on leave. What should you do?",
        options: [
            "Suspend their account in the Admin console.",
            "Purchase an Archived User license and assign the license to the employee.",
            "Export the account data by using Takeout, and remove the user license in the Admin console.",
            "Copy the employee's emails, and transfer their file ownership to a teammate. Delete the user account."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 111,
        category: "migration",
        text: "Your company has recently migrated from an on-premises email solution to Google Workspace. You have successfully added and verified the new primary domain. However, you also want to continue receiving emails sent to your former on-premises email server for a transitional period. You need to ensure that emails sent to your former domain are still delivered to your on-premises server, even though your primary email system is now Google Workspace. What should you do?",
        options: [
            "Configure MX records for the former domain to point to your on-premises email servers.",
            "Add the former domain as a secondary domain in your Google Workspace settings and verity the domain.",
            "Add the former domain as a domain alias for the primary domain.",
            "Adjust the TTL (Time-to-Live) for the former domain to ensure a smooth transition."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 112,
        category: "admin",
        text: "Your company's sales team writes many business proposals in Google Docs. They want to streamline the proposal process by using templates. You need to create a document template with pre-populated sections that the sales team can access. What should you do?",
        options: [
            "Create the templates in Google Drive. Grant edit access to the sales team.",
            "Create the templates in Google Drive and download the files as PDFs. Upload PDF files to a drive shared with your sales team.",
            "Create the templates in Google Drive. Make a copy for each sales representative Transfer ownership of each template to the sales representatives.",
            "Enable organization branding in the Admin console. Create the templates in Google Drive Add the templates to default themes and templates for the entire organization."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 113,
        category: "admin",
        text: "Your company has a globally distributed remote work team. You want to ensure all team members adhere to the company’s data security policies and only access authorized systems based on their location and role. What should you do?",
        options: [
            "Set up and mandate the use of a company-wide VPN for all remote access.",
            "Create and enforce data loss prevention (DLP) rules to control data sharing",
            "Configure access control policies with conditional access",
            "Implement two-factor authentication for all remote team members"
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 114,
        category: "admin",
        text: "You work for a multinational organization. Employees in several office buildings are experiencing issues with Google Voice, including dropped calls and poor call quality. You need to quickly determine whether this is a localized issue or a broader Google Voice service disruption. What should you do?",
        options: [
            "Check the Google Workspace Status Dashboard for reported service outages or disruptions.",
            "Use the security investigation tool to search user log events for \"Call failed\", and analyze packet loss data.",
            "Verify whether users in the affected buildings have been assigned Google Voice licenses.",
            "Check the Google Workspace Updates blog for announcements about Google Voice issues."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 115,
        category: "admin",
        text: "Your company is streamlining workflows by creating custom applications for tasks like filing expense reports or requesting time off. You need to identify a Google Workspace solution to develop these applications. Your development team has only basic coding knowledge. What should you do?",
        options: [
            "Enable AppSheet for your organization.",
            "Enable Gemini for Workspace. Direct users to use generative Al across Gmail and Drive to simplify the submission of expense reports.",
            "Enable AppScript for your organization and allow employees to build add-ons to existing Workspace solutions.",
            "Direct employees to use Google Forms to collect data and create basic workflows."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 116,
        category: "gmail",
        text: "You notice an increase in support tickets related to Gmail. Multiple users are reporting that their emails are not loading, and they are receiving error messages. You need to troubleshoot the issue and identify potential causes. What should you do?",
        options: [
            "Review the users' email forwarding settings to ensure that emails are not being redirected to incorrect addresses.",
            "Analyze the users' Gmail labels and filters to determine whether incoming emails are being inadvertently blocked.",
            "Gather HAR files from affected users to capture network traffic and analyze request/response details.",
            "Collect the users' browser versions and extensions to identify potential compatibility issues."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 117,
        category: "directory",
        text: "Your organization acquired a small agency with only five users. You need to create user accounts for these new employees. Agency users must have their original email address. You have added the agency’s domain as a secondary domain. What should you do?",
        options: [
            "Manually create users from the Admin console. When creating the user account, choose the agency domain to be used for the email address.",
            "Use the Directory API to automatically create the user accounts.",
            "Bulk upload all users using a CSV file.",
            "Use Google Cloud Directory Sync (GCDS) to sync users from an existing directory."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 118,
        category: "vault",
        text: "The human resources department notified you of a legal investigation that was started for an employee in the finance department. You need to ensure that this employee's Google Drive data is preserved for at least one year and does not get deleted by the user or by other means. The Google Vault default retention rules for Drive are set for five years. What should you do?",
        options: [
            "Create a hold in Vault for the employee's Drive.",
            "Place the employee into a separate organizational unit (OU). Create a custom one-year retention rule for this OU.",
            "Change the Vault default retention rule to one year instead of five.",
            "Confirm that the Vault default retention rule is set for five years."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 119,
        category: "drive",
        text: "Your security team is concerned about disgruntled employees downloading large amounts of intellectual property. You need to create an automatic notification if any user downloads more than 500 files from Google Drive within a one-hour period. What should you do?",
        options: [
            "Configure a Data Loss Prevention (DLP) rule for Drive.",
            "Use the alert center to review Drive audit logs for instances where users download a large number of files.",
            "Create an activity rule in the security investigation tool to monitor Drive download events. Set a threshold to trigger an alert.",
            "Set up an alert within Google Cloud Monitoring to track the number of Drive API calls and trigger a notification when a user makes an excessive number of download requests."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 120,
        category: "admin",
        text: "Your company recently installed a free email marketing platform from the Google Workspace Marketplace. The marketing team is unable to access customer contact information or send emails through the platform. You need to identify the cause of the problem. What should you do first?",
        options: [
            "Use the security investigation tool to review Gmail logs.",
            "Confirm that the \"Manage Third-Party App Access\" setting in the Admin console is enabled.",
            "Check the OAuth scopes that are granted to the email marketing platform and ensure the platform has access to Contacts and Gmail.",
            "Verify that the email marketing platform's subscription is active and up-to-date."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 121,
        category: "drive",
        text: "A team of employees in your organization is collaborating on a project with an external organization. Employees of the external organization need access to project documents in your Google Workspace domain, however they don't currently have a Google account. You need to enable secure file sharing while preventing unauthorized access. What should you do?",
        options: [
            "Enable external sharing for the organizational unit (OU) that is created for the external organization.",
            "Add the external organization's domain to the trusted domain allowlist.",
            "Create and assign user accounts to the external users of your Workspace domain.",
            "Enable visitor sharing for the organizational unit (OU) in your Workspace domain."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 122,
        category: "drive",
        text: "You recently noticed a suspicious trend in your organization's Google Drive usage. Several users have shared sensitive documents outside the organization, potentially violating your company's data security policy. You need to identify the responsible users and the extent of the unauthorized sharing. What should you do?",
        options: [
            "Create an activity rule in the Security Center to alert you of future external sharing events.",
            "Use the security health page to identify misconfigured sharing settings in Drive.",
            "Review the organization's sharing policies in the Admin console, and update the policies to prevent external sharing.",
            "Use the security investigation tool to analyze Drive logs and identify the users."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 123,
        category: "chrome",
        text: "Your organization wants to ensure that all employees who use Chrome browsers for work adhere to specific security and configuration settings. You need to manage and control the Chrome browsers used within the company while using the least expensive solution. What should you do?",
        options: [
            "Remotely wipe all employee devices to ensure that they are using the latest Chrome browser version.",
            "Enroll the Chrome browsers in your organization's domain and apply Chrome browser policies.",
            "Use a third-party software deployment solution to manage the Chrome browser.",
            "Disable all extensions on employee Chrome browsers to prevent any potential security risks."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 124,
        category: "mobile",
        text: "Your organization has detected a significant rise in unauthorized access to applications from personal devices. This poses a critical security risk and could lead to data loss. To mitigate this risk, you must immediately restrict user access to these applications. What should you do?",
        options: [
            "Enable data loss prevention rules.",
            "Limit apps access to company-issued devices by using context-aware access.",
            "Configure apps data access to Limited to only allow access to unrestricted services.",
            "Enable multi-factor authentication for application access."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 125,
        category: "admin",
        text: "Your organization has acquired another company that used another email provider. Employees from the newly acquired company need to be able to send and receive emails from two domain names-your organization’s domain name and their former company’s domain name. You need to identify the best approach. What should you do?",
        options: [
            "Add the acquired company’s domain name as a Secondary Domain, and create user accounts with the new domain name.",
            "Add the acquired company's domain name as an alias domain.",
            "Change the MX records of the old domain to point to the new domain.",
            "Create a mail routing rule in the new domain to route messages addressed to the old domain."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 126,
        category: "directory",
        text: "You work for a global organization that has offices in the United States and the European Union (EU). There is an organizational unit (OU) for employees in the United States and a separate OU for employees in the EU. Your company regulations need you to ensure that your users' data is located in the same region as their physical office. What should you do?",
        options: [
            "Set the OU data location to No preference.",
            "Turn on advanced settings and select Enable features that may process data across multiple regions.",
            "Turn on advanced settings and select Disable features that may process data across multiple regions.",
            "Set a data region policy for each region’s OU."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 127,
        category: "drive",
        text: "Your organization needs to prevent the accidental sharing of sensitive financial data. You need to create an efficient solution policy that must apply consistently to both outbound messages and files stored by users. What should you do?",
        options: [
            "Use the unified Data Loss Prevention (DLP) interface to build a single rule.",
            "Implement Context-Aware Access policies to restrict data sharing for specific user groups.",
            "Enable basic attachment filtering in the email service to block all financial documents.",
            "Configure separate content compliance rules for the email and file storage services."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 128,
        category: "workspace",
        text: "Your organization has decided to allow employees to access YouTube using their corporate Google Workspace accounts for training purposes. Currently, when users attempt to visit youtube.com while signed in, they see an error message indicating the service is not available for their account. You need to enable YouTube for all users in the organization. What should you do?",
        options: [
            "Find YouTube in the Additional Google services list, and turn it on for everyone.",
            "Add the YouTube application to the list of trusted apps in the API Controls settings.",
            "Instruct users to activate the YouTube service in their individual Google Account settings.",
            "In the Admin console, navigate to Domain settings and add youtube.com to the list of allowlisted domains."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 129,
        category: "drive",
        text: "A user's account was recently compromised, and you need to determine the scope of the incident. You want to see all actions performed by that user in Google Drive in the last 7 days, including which files were accessed and if any were shared externally. What should you do?",
        options: [
            "Review the Admin log.",
            "Use the security investigation tool.",
            "Review the Drive log events.",
            "Check the User log events."
        ],
        correctIndex: 1,
        explanation: "Note: While your key said D, the standard tool for \"determining scope\" and \"investigating actions across 7 days\" in a security context is the Security Investigation Tool)."
    },
    {
        id: 130,
        category: "admin",
        text: "A user claims they cannot find an important note in Google Keep that they had access to. They suspect another user with whom they were collaborating may have deleted it. You need to quickly investigate the activity on that specific note to determine if it was deleted and by whom. What should you do?",
        options: [
            "Use the security investigation tool to search for all delete actions across all users, then filter the results for activity related to Keep.",
            "Review the Keep log events to find a deleted note event associated with the note’s title or document ID.",
            "Review the access transparency logs for Google Keep to see if a Google employee deleted the note.",
            "Review the general settings for the Keep service to see which organizational units have it enabled."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 131,
        category: "mobile",
        text: "The field service team at your organization uses Google Sheets to track customer equipment inventory and service requests. Team members find it difficult to update the spreadsheet accurately from their mobile devices while on-site. They need a user-friendly mobile application for this process. You need to recommend a solution that allows the team to build a custom app for data entry and task management without writing any code. What should you recommend?",
        options: [
            "Create a Google form for data submission.",
            "Enable offline file synchronization using Google Drive for desktop.",
            "Build a no-code mobile app with Google AppSheet, using Google Sheets as the data source.",
            "Use Google Apps Script to build a web application that interfaces with the Google Sheets data."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 132,
        category: "directory",
        text: "A new employee has joined your organization and requires a Google Workspace account. You need to manually create their user account from the Admin console. For security purposes, the employee must be prompted to create their own password the first time they sign in. What should you do?",
        options: [
            "Navigate to the Security settings, configure the password policy to enforce password changes for new users, and then add the new user from the Users menu.",
            "Create the new user account with a temporary password. Then immediately navigate to their user profile and use the Reset password function to trigger a mandatory change.",
            "Use the bulk upload tool with a single-user CSV file, and add a password in the Change password at next sign-in column.",
            "Navigate to the Users menu, click Add a new user, enter their details, and select the option to require a password change at the next sign-in."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 133,
        category: "gmail",
        text: "An employee in the finance department reports that they have not received an invoice email from an external vendor. The employee has checked their Gmail folders, filters, and forwarding settings thoroughly and cannot find the message. You need to determine the delivery status of the message. What should you do?",
        options: [
            "Check the spam filter settings to find the vendor's domain on a custom deny list.",
            "Use the Email Log Search tool to query for the message by sender and recipient.",
            "Search the Admin quarantine to locate the held message.",
            "Use the security investigation tool to search for all Gmail log events from the vendor's IP address."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 134,
        category: "migration",
        text: "You are reviewing a migration report and notice that an entire folder, its sub-folders, and files have failed to migrate. The report shows an error for the top-level parent folder that reads: \"Failed to crawl folder as one of the upstream dependency tasks for Drive id: drive_id, Folder id: folder_id has failed.\" You need to find the root cause of the failure. What should you do first?",
        options: [
            "Verify that the user in the identity map has Editor permissions to the parent folder.",
            "Create the parent folder in the target user’s Google Drive, and run a delta migration.",
            "Check the Microsoft 365 settings to ensure that the folder is not under a legal hold.",
            "Search the migration report for the specific parent folder ID to find its original error."
        ],
        correctIndex: 3,
        explanation: "The correct answer is D."
    },
    {
        id: 135,
        category: "calendar",
        text: "An executive at your organization has asked you to create a shared calendar for a new, temporary project team. You need to ensure that only the project team members can view and edit the calendar, and that access can be easily managed as the team changes. What should you do?",
        options: [
            "Create a Google Group for the project team, and share a new calendar with that Google group.",
            "Create a new public calendar and share the link with the project team.",
            "Create a new calendar, and add each team member's email address to the sharing settings.",
            "Create a new resource calendar for the project, and restrict booking permissions to the project team."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    },
    {
        id: 136,
        category: "security",
        text: "Your organization wants to enable single sign-on (SSO) for a new third-party SaaS application, allowing employees to log in with their Google Workspace credentials without needing a separate password. You need to configure Google Workspace as the identity provider (IdP) for single sign-on (SSO) integration with this new application. What should you do?",
        options: [
            "Add the third-party application to the trusted applications list, and grant it the necessary Sign In and Profile API scopes for all users in the organization.",
            "Create an OAuth 2.0 client ID for the third-party application and provide the client ID and secret to the application's developers for them to integrate.",
            "Configure a new custom SAML application within Google Workspace.",
            "Establish a new third-party IdP profile in Google Workspace that points to the sign-in and sign-out URLs of the new SaaS application."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 137,
        category: "gmail",
        text: "You have been asked to produce a complete copy of all email data from a specific user’s Gmail account. You need to gather this information using a native tool within the Google Admin console. What should you do?",
        options: [
            "Use the security investigation tool to search for and save the user’s email logs.",
            "Use Google Workspace Migrate.",
            "Use the Data Export tool.",
            "Configure an email routing rule to forward copies of all the user’s existing emails to a designated mailbox."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 138,
        category: "migration",
        text: "You have completed a large file migration from Microsoft OneDrive to Google Workspace. A few days later, before the final cutover, you discover that users have continued to create new files and update existing ones in their source OneDrive accounts. You need to migrate only the newly added and modified files without the data being duplicated. What should you do?",
        options: [
            "Exit the current migration, and start a new, full migration.",
            "Export a migration report to identify the new files, and move them individually.",
            "Run a delta migration from the existing migration project.",
            "Create a new migration scope file containing only the recently active users."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 139,
        category: "gmail",
        text: "Your organization uses a Cloud Data Loss Prevention (DLP) policy to scan outgoing Gmail messages for sensitive information. According to a new compliance requirement, any user who attempts to send a non-compliant email must be prevented from doing so and should receive immediate feedback. This feedback must explain the policy violation and provide an internal point of contact. You need to configure the DLP policy to meet this requirement. What should you do?",
        options: [
            "Set the DLP rule action to Reject message, and use the standard system bounce-back to inform the sender.",
            "Select Block message as the DLP rule action, and customize the automated sender notification with the required explanation.",
            "Configure the DLP rule to Notify recipient, and include the violation details in the notification.",
            "Set the DLP rule action to Quarantine the message, and configure a notification for the administrator."
        ],
        correctIndex: 1,
        explanation: "The correct answer is B."
    },
    {
        id: 140,
        category: "chat",
        text: "Your organization is working on a highly confidential initiative, codenamed \"Sierra.\" To prevent accidental leaks, company policy requires that you proactively prevent the project's codename from being transmitted. You must ensure that messages containing the word \"Sierra\" cannot be sent in Google Chat. What should you do?",
        options: [
            "Configure a content compliance rule in the Admin console to scan for \"Sierra\" and quarantine any matching messages.",
            "Enable client-side encryption for Google Chat.",
            "Create a data protection rule for Google Chat that uses a content detector for \"Sierra\" and is configured to block the message from being sent.",
            "Create an activity rule in the security investigation tool to send an alert each time \"Sierra\" is mentioned so the admin can remediate the issue."
        ],
        correctIndex: 2,
        explanation: "The correct answer is C."
    },
    {
        id: 141,
        category: "calendar",
        text: "Your company has developed a ctom internal tool that needs to automatically add company holidays and training events to every user's primary Google Calendar. To function correctly, the application requires access to the Calendar API for all users without prompting each individual for their consent. What should you do?",
        options: [
            "Configure domain-wide delegation for the application's service account and authorize the necessary OAuth scopes. Store the service account securely.",
            "Generate a new API key from the application's Google Cloud project and configure the tool to use it for authentication.",
            "Add the custom internal tool to the list of trusted apps in App Access Control.",
            "Publish the application as a private app on the Google Workspace Marketplace and set it to be force-installed for all users."
        ],
        correctIndex: 0,
        explanation: "The correct answer is A."
    }
];
