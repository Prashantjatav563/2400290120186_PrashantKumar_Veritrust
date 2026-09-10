# VeriTrust - AI Fake News Detection

## Student Details
- **Name:** Prashant Kumar
- **Roll Number:** 2400290120186

## Project Overview
VeriTrust is an AI-powered Fake News Detection project. This submission contains the static web frontend, AWS deployment evidence, architecture diagram, deployment notes, and case-study report.

## Frontend
The frontend is built with HTML5, CSS3 and JavaScript.

```text
frontend/
├── index.html
├── style.css
└── script.js
```

## AWS Deployment
The current implemented cloud deployment is the VeriTrust static frontend on **Amazon S3 Static Website Hosting**.

- **Region:** us-east-1 (US East - N. Virginia)
- **S3 Bucket:** `veritrust-fake-news-prashant-2026`
- **Website endpoint:** `http://veritrust-fake-news-prashant-2026.s3-website-us-east-1.amazonaws.com`

> The direct S3 website endpoint is HTTP. The live ML prediction backend is not part of the current S3 deployment. The multi-tier EC2/ALB/RDS architecture in the report is the target architecture and is clearly marked as such.

## AWS Well-Architected Review
- **Workload:** VeriTrust - AI Fake News Detector
- **Framework:** AWS Well-Architected Framework
- **Questions answered:** 57/57
- **High risk items:** 16
- **Medium risk items:** 8

| Pillar | Questions |
|---|---:|
| Operational Excellence | 11/11 |
| Security | 11/11 |
| Reliability | 13/13 |
| Performance Efficiency | 5/5 |
| Cost Optimization | 11/11 |
| Sustainability | 6/6 |
| **Total** | **57/57** |

## Repository Contents
```text
2400290120186_PrashantKumar_Veritrust/
├── README.md
├── VeriTrust_Case_Study_Report.pdf
├── frontend/
├── Architecture/
├── AWS_Screenshots/
└── Infrastructure_Deployment/
```

## Local Run
Open `frontend/index.html` directly in a browser. No server is required for the static demo.

## Important Submission Note
The architecture diagram documents the proposed highly available multi-tier design using Route 53, ALB, EC2 Auto Scaling, RDS, VPC, IAM and CloudWatch. Only the S3 static frontend is currently evidenced as deployed. No target component is claimed as deployed without evidence.
