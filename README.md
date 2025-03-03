# Grafana Stack on Railway

Grafana stack built for Railway including:

- **Grafana**: for visualization, dashboards, and alerting
- **Loki**: for logs
- **Prometheus**: for metrics

Tempo used to be on this list [then it hurt my feelings](https://bsky.app/profile/mykal.codes/post/3ljhc7xpums2e). In reality, it would require 2-3 additional services to get running properly (memcached, and an S3 compatible storage solution) which seemed like overkill for what I am trying to achieve.

> [!WARNING]  
> This is a work in progress. When the template is done it will be published to Railway and this warning will be removed.