# Mukul Mogha — Portfolio

A React-based portfolio landing page, containerized with Docker following secure supply chain practices.

## 🚀 Quick Start

### Development
```bash
cd portfolio
npm install
npm run dev
```

### Docker
```bash
docker build -t portfolio .
docker run -p 8080:80 portfolio
```
Then open [http://localhost:8080](http://localhost:8080).

## 🔐 Security Practices
- Multi-stage Docker build to minimize image size and attack surface
- Alpine-based images (`node:20-alpine`, `nginx:stable-alpine`)
- GitHub Actions CI with Trivy vulnerability scanning
- SBOM awareness and CVE tracking

## 🛠️ Tech Stack
- **Frontend**: React 19 + Vite
- **Container**: Docker (multi-stage build)
- **Web Server**: Nginx (Alpine)
- **CI/CD**: GitHub Actions + Trivy Scanner

## 📁 Project Structure
```
├── portfolio/          # React application
│   ├── src/           # Source code
│   ├── public/        # Static assets
│   └── package.json   # Dependencies
├── Dockerfile         # Multi-stage Docker build
├── CVE-Fix-Log.md     # Security fix log
├── sbom.txt           # SBOM placeholder
└── .github/workflows/ # CI pipeline
```
