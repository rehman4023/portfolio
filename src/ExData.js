const workHistory = [
    {
        companyName : 'Neone',
        role: 'Cloud engineer',
        duration: "July'21 – Oct'21",
        workDes: [
            "Worked with team to implement istio service mesh for Kubernetes service management using Helm Charts.",
            "Installed kiali dashboard, Prometheus and Grafana for monitoring traffic across the cluster.",
            "Worked with multiple Kubernetes cluster across multiple GCP projects to implement various environments like dev, staging and production.",
            "worked with few CNCF technologies rocket chat and NATS to implement business logic.",
            "Configured a custom Log based metrics to log the errors in the entire cluster across multiple namespaces and multiple pods at once using LQL.",
            "Made a Google monitoring dashboard to visualise the errors from the log based metrics by using MQL.",
            "Created multiple alert policies using LQL for Error monitoring.",
            
        ],
        exposer: ["Terraform", "Helm", "istio", "Anthos", "MongoDB", "GKE", "Kiali", "LQL", "MQL","NATS","Git-Ops","firestore","rocter-chat","Docker","AR","etcd","kubernetes"] ,
        link: 'https://neone.com/',
    },
    {
        companyName: 'Genius Yield',
        role: 'Cloud engineer',
        duration: "Mar'21 – Apr'21",
        workDes: [
            "Created Terraform Modules to automate clusters with multiple Node pools for Cardano Blockchain compatible workloads, service accounts, cloud sql instances, compute engine instances, Googles secret manager and a few more services…. ",
            "Automated the execution of the terraform script from Circle CI. Finally deployed the workloads to clusters using Argo CD.",            
        ],
        exposer: ["Terraform ", "Circle CI", "Argo CD" , "Cloud SQL","GKE","Cardano","GCE","secret manager"],
        link: 'https://www.geniusyield.co/?lng=en',
    },
    {
        companyName: 'D3Vtechnologies Website',
        role: 'Cloud engineer',
        duration: "Mar'21 – Apr'21",
        workDes: [
            "Made an Angular production build with Express Js Server Side Rendering(SSR) of Meta data tags to make the website more SEO optimised.",
            "Deployed the build to Firebase Hosting and the server was hosted on Cloud Function to trigger the SSR. The images were moved to secure cloud storage bucket to reduce the build size during deployment.",
            "Deployed another version of the website made using Larvel Mysql into google cloud as Cloud run containers and Cloud SQL.",            
        ],
        exposer: ["Angular ", "NodeJs", "Firebase" , "Cloud function","Cloud Run","Docker","App engine","cloud SQL"],
        link: 'https://www.d3vtech.com/',
    },
    
];

export default workHistory;
