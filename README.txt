EMiC theme
==========

D6 Zen sub-theme for EMiC. (Editing Modernism in Canada)


Instructions:
-------------

- download and enable zen 6.x-2.1 or later
- navigate to the themes folder and do
- git clone https://github.com/DGI-EMiC/emic-theme.git
- mv emic-theme emic
- enable the theme
- the main navigation menu is populated with the primary links
- the top right corner of the header will be populated with the secondary links

In the EMiC theme settings set where X = checked and O = unchecked
X Logo
O Site name
O Site slogan
O Mission statement
O User pictures in posts
O User pictures in comments
O Search box
X Shortcut icon
X Primary links
X Secondary links 

If you want to use the islandora solr simple search form, move the block into
the header region. In the block options set <none> as title.

Notes:
------

- The original site makes use of a contextual title, which isn't the page title,
  but indicates the section in which the page is located. This could be the
  parent menu items or anything else. For now I added it without conditional
  statements. These will be created as the project grows.

- The contextual title will be linked with a contextual image above a/the
  navigation in the sidebar