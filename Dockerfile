FROM python:3.10-slim

LABEL maintainer="Mukul Mogha <moghaansh@gmail.com>"
LABEL description="Secure container demo with minimal CVEs and SBOM"

WORKDIR /app

COPY app/hello.py .

RUN pip install --no-cache-dir flask

CMD ["python", "hello.py"]
