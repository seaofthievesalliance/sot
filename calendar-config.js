// SOT Alliance Google Calendar configuration
// The Calendar ID is public. The API key is also safe to expose in frontend
// code when it is restricted to your website's HTTP referrers in Google Cloud.
window.SOT_GOOGLE_CALENDAR_ID =
  "aced9060157a4fc2c5dc7eedb823bb47455258074c73a5b64b796e30a23053cf@group.calendar.google.com";

// Add your Google Calendar API key here after enabling Google Calendar API.
// Example: window.SOT_GOOGLE_CALENDAR_API_KEY = "AIza...";
window.SOT_GOOGLE_CALENDAR_API_KEY = "AIzaSyADta_nX9ug9qYtoP4jr6PUlUx3KzYvTdM";

window.SOT_GOOGLE_CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0/r?cid=" +
  encodeURIComponent(window.SOT_GOOGLE_CALENDAR_ID);
