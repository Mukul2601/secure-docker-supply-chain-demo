# secure-docker-supply-chain-demo
A mock container security project built with Docker, Flask, GitHub Actions, and SBOM concepts to demonstrate secure supply chain practices.
# Secure Docker Supply Chain Demo

This is a mock project created by Mukul Mogha to demonstrate secure container image practices, SBOM awareness, and CVE tracking for Docker's Supply Chain Security role.

## 🔐 Key Concepts Demonstrated
- Secure Dockerfile using `slim` base image
- Basic Flask app to simulate real container usage
- GitHub Actions CI pipeline
- Trivy scanner for vulnerability checks
- SBOM (placeholder) & CVE Fix Log

## 🚀 Run Locally
```bash
docker build -t secure-demo .
docker run -p 5000:5000 secure-demo
