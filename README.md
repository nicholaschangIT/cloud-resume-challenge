Cloud Resume Azure Challenge

Hi! 👋  

This is the A Cloud Guru Challenge by Gwyneth Pena-Siguenza. The main aim of the challenge is to create a resume using using azure and by taking this challnege it helps build more skills in the cloud.  Details of the challenge can be found here. https://acloudguru.com/blog/engineering/cloudguruchallenge-your-resume-in-azure. 

### The website ###
​
When building the website and her advice, I have copied the resume new starter template from her Github Repo in my project repo.  
### Storage Account ###

I used Azure Storage for hosting the static website directly from a storage container. I have created a resource group and a storage account. In the storage account, I enabled the static website hosting and uploaded the website content to the storage account. I retrieved the default website URL to confirm that the website works. 

### Creating Azure CDN Profile and Endpoint###

The next step is to add a domain to the storage container and enable a CDN profile and endpoint. Azure CDN enables delivering files faster and more reliably by using servers closest to the users. The Azure CDN provides HTTPS support using an SSL certificate and adding a custom domain for the website.

### CosmosDB to store Visitor Count with Azure Function ###

Gwen suggested using CosmosDB to store visitor count. Azure offers a free tier for CosmosDB. I created the CosmosDB database and a container to store one record of my visitor count. The record has an id equal to “1” and a visitorCount property, which will later read and updated with Azure function.
## Github ## 
​
Set up Github repo to use the source code 
​
Add a Github Action and push it with CI/CD with visual studio code 

Purge CDN endpoint so it add the latest changes to your website. ​
## Prerequisites

- [Starter code repo](https://github.com/ACloudGuru-Resources/acg-project-azure-resume-starter)
- [GitHub account](https://github.com/join)
- [Azure account](https://azure.microsoft.com/en-us/free)
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- [.NET Core 3.1 LTS](https://dotnet.microsoft.com/download/dotnet/3.1)
- [Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=macos%2Ccsharp%2Cbash#install-the-azure-functions-core-tools)
- [Visual Studio Code](https://code.visualstudio.com)
- [Visual Code Extensions](https://code.visualstudio.com/docs/introvideos/extend)
  - [Azure Functions Extensions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)
  - [C# Extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)
  - [Azure Storage Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestorage)

## Front-end resources

The front-end is a static site with HTML, CSS, and JavaScript. It's static and has a visitor counter. The visitor counter data fetched via an API call to an Azure Function.

- This [article](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data) explains how to make an API call with JavaScript and in a simple way how to use it to make an API call.
- [Azure storage explorer](https://azure.microsoft.com/en-us/features/storage-explorer/) is a handy tool to use when working with Storage Accounts
- This is how you can [deploy static site to blob storage.](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-host)
  
## Back-end resources

The back-end is an [HTTP triggered](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger?tabs=csharp) Azure Functions with Cosmos DB input and output binding. The Function is triggered, it retrieves the CosmosDB item, add +1 to it, and saves it and returns its value to the caller.
