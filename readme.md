# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 30 Jan 2024 21:50:37 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az1205-447 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `141`ns (100%)        | `211`ns (150%)                 | `7,092,199`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `240`ns (170%)        | `400`ns (284%)                 | `4,166,667`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (213%)        | `491`ns (348%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `351`ns (249%)        | `682`ns (484%)                 | `2,849,003`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `561`ns (398%)        | `1,212`ns (860%)               | `1,782,531`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `731`ns (518%)        | `1,553`ns (1,101%)             | `1,367,989`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `732`ns (519%)        | `1,504`ns (1,067%)             | `1,366,120`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,384`ns (982%)      | `2,787`ns (1,977%)             | `722,543`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,707`ns (1,920%)    | `4,931`ns (3,497%)             | `369,413`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,731`ns (3,355%)    | `9,335`ns (6,621%)             | `211,372`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `781`ns (100%)        | `942`ns (121%)                 | `1,280,410`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,951`ns (4,091%)   | `38,815`ns (4,970%)            | `31,298`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `38,911`ns (4,982%)   | `39,615`ns (5,072%)            | `25,700`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `210`ns (110%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `382`ns (200%)        | `422`ns (221%)                 | `2,617,801`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `460`ns (241%)        | `502`ns (263%)                 | `2,173,913`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `603`ns (316%)        | `652`ns (341%)                 | `1,658,375`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,284`ns (672%)      | `1,373`ns (719%)               | `778,816`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,363`ns (714%)      | `1,454`ns (761%)               | `733,676`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,683`ns (2,452%)    | `4,931`ns (2,582%)             | `213,538`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `231`ns (115%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `392`ns (195%)        | `451`ns (224%)                 | `2,551,020`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (224%)        | `512`ns (255%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,272`ns (633%)      | `1,372`ns (683%)               | `786,164`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,754`ns (873%)      | `1,915`ns (953%)               | `570,125`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,983`ns (2,977%)    | `6,155`ns (3,062%)             | `167,140`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,683`ns (3,325%)    | `6,995`ns (3,480%)             | `149,633`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `562`ns (100%)        | `641`ns (114%)                 | `1,779,359`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `592`ns (105%)        | `651`ns (116%)                 | `1,689,189`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `661`ns (118%)        | `743`ns (132%)                 | `1,512,859`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `311`ns (100%)        | `342`ns (110%)                 | `3,215,434`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `542`ns (174%)        | `601`ns (193%)                 | `1,845,018`/sec       |

<!-- endblock(results) -->
