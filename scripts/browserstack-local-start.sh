# Assumes the binary is created and stored via the karma process.
$BROWSER_STACK_BINARY_BASE_PATH/BrowserStackLocal --key $BROWSER_STACK_ACCESS_KEY --only-automate --force-local --force --local-identifier SKYUX2BROWSERSTACKCI --parallel-runs 25 & sleep 3
