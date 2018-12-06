#!/bin/bash
# download_release_data.sh
# If you’re using bitbucket, you can just set the env-var in the circle config for your bitbucket repo
git archive — remote=ssh://${BITBUCKET_CERTS_REPO} HEAD android/release-key.jks | tar -x
# git archive — remote=ssh://${BITBUCKET_CERTS_REPO} HEAD google-play.json | tar -x

# if you’re using github, you can give your machine user a GH access token to simply grab the file, the names of which can be stored in the circle env-var section as well
# curl -L — header “Authorization: token ${GH_TOKEN}” \
#  — header ‘Accept: application/vnd.github.v3.raw’ \
#  — remote-name \
#  — location “${GITHUB_URL_FOR_KEYSTORE}”
# curl -L — header “Authorization: token ${GH_TOKEN}” \
#  — header ‘Accept: application/vnd.github.v3.raw’ \
#  — remote-name \
#  — location “${GITHUB_URL_FOR_DEVELOPER_JSON}”
