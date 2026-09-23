/* =====================================================================
   script.js — loads each section's HTML file into the page.
   You should NOT need to edit this file. Edit the files in sections/.
   ===================================================================== */
(function () {
  var slots = document.querySelectorAll('[data-section]');
  slots.forEach(function (slot) {
    var name = slot.getAttribute('data-section');
    fetch('sections/' + name + '.html')
      .then(function (r) { return r.ok ? r.text() : '<p style="color:#c44">Could not load sections/' + name + '.html</p>'; })
      .then(function (html) { slot.innerHTML = html; })
      .catch(function () { slot.innerHTML = '<p style="color:#c44">Error loading section.</p>'; });
  });
})();
