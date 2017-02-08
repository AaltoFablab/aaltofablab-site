# aaltofablab-site
This is the source for Aalto Fablab's website http://fablab.aalto.fi

The code is open source under the [MIT License](https://github.com/AaltoFablab/aaltofablab-site/blob/master/LICENSE) - feel free to see how we've built the site, learn from it and share onwards.

## Site Configuration
The site is a static site built using [Jekyll](https://jekyllrb.com), deployed with [Netlify](https://www.netlify.com), using [Netlify CMS](https://github.com/netlify/netlify-cms) for static site content authoring.

## Posts

Content displayed on the **"Share"** page is pulled from the standard **_posts** collection and organised using categories.

### Post Categories
- madeinfablab
- howto
- fabacademy

## Collections

All other content is organised into custom collections, located in **source/\_\<collectionName\>** directories. The content within collections is further organised in categories declared in the YAML metadata.

| courses | events | faqs | info | machines             | news |
| ------- | ------ | ---- | ---- | -------------------- | ---- |
|         |        |      |      | 3d-printer           |      |
|         |        |      |      | _sla_                |      |
|         |        |      |      | _fdm_                |      |
|         |        |      |      | _dual-extruder_      |      |
|         |        |      |      | cutting-machine      |      |
|         |        |      |      | _lasercutter_        |      |
|         |        |      |      | cnc                  |      |
|         |        |      |      | _3-axis_             |      |
|         |        |      |      | _4-axis_             |      |
|         |        |      |      | electronics          |      |
|         |        |      |      | _facilities_         |      |
|         |        |      |      | _prototyping-boards_ |      |
|         |        |      |      | scanning-devices     |      |
|         |        |      |      | _3d-scanner_         |      |
|         |        |      |      | misc                 |      |

## Image Assets

Images referenced in posts are held in the **img/uploads** folder.

| Collection         | Format       | Resolution     | Naming Convention    |
| ------------------ | ------------ | -------------- | -------------------- |
| Machines           | JPG          | 800 x 600      | lowercase-dashed.jpg |
| Events             | JPG          | 1024 x 768     | lowercase-dashed.jpg |
| Courses            | SVG          | (1:1) AR       | lowercase-dashed-<icon>.svg |
| Share              | JPG / GIF    | 1024 x 768     | lowercase-dashed.<extension> |
| People             | JPG          | 800 x 800      | lowercase.jpg |

---

### Credits
Site design and code by [Charlie Banthorpe](http://www.banthorpe.co)
