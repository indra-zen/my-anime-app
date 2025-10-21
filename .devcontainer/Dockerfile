FROM node:20-bullseye

# Install basic development tools
RUN apt-get update && apt-get install -y \
    less \
    man-db \
    sudo \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set environment variables
ENV DEVCONTAINER=true
ENV NODE_ENV=development

# Set working directory
WORKDIR /workspace

# Switch to node user
USER node
