# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 20 Sep 2026 01:19:00 GMT with Node.js v26.9.0 (V8 v14.6.202.34-node.32) on runnervmlun5p (Linux-x64 Intel(R) Xeon(R) 6973P-C)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `33`ns (100%)         | `34`ns (103%)                  | `30,303,030`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `67`ns (203%)         | `68`ns (206%)                  | `14,925,373`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `80`ns (242%)         | `104`ns (315%)                 | `12,500,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `91`ns (276%)         | `94`ns (285%)                  | `10,989,011`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `112`ns (339%)        | `117`ns (355%)                 | `8,928,571`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `201`ns (609%)        | `207`ns (627%)                 | `4,975,124`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `261`ns (791%)        | `278`ns (842%)                 | `3,831,418`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `299`ns (906%)        | `306`ns (927%)                 | `3,344,482`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `605`ns (1,833%)      | `623`ns (1,888%)               | `1,652,893`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `990`ns (3,000%)      | `1,018`ns (3,085%)             | `1,010,101`/sec       |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `214`ns (100%)        | `233`ns (109%)                 | `4,672,897`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `779`ns (364%)        | `861`ns (402%)                 | `1,283,697`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `12,719`ns (5,943%)   | `13,119`ns (6,130%)            | `78,623`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `32`ns (100%)         | `34`ns (106%)                  | `31,250,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `78`ns (244%)         | `81`ns (253%)                  | `12,820,513`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `78`ns (244%)         | `90`ns (281%)                  | `12,820,513`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `84`ns (263%)         | `88`ns (275%)                  | `11,904,762`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `107`ns (334%)        | `123`ns (384%)                 | `9,345,794`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `293`ns (916%)        | `299`ns (934%)                 | `3,412,969`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,056`ns (3,300%)    | `1,086`ns (3,394%)             | `946,970`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `34`ns (100%)         | `35`ns (103%)                  | `29,411,765`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `70`ns (206%)         | `73`ns (215%)                  | `14,285,714`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `73`ns (215%)         | `75`ns (221%)                  | `13,698,630`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `79`ns (232%)         | `100`ns (294%)                 | `12,658,228`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `315`ns (926%)        | `330`ns (971%)                 | `3,174,603`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `773`ns (2,274%)      | `785`ns (2,309%)               | `1,293,661`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,500`ns (4,412%)    | `1,531`ns (4,503%)             | `666,667`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `103`ns (100%)        | `107`ns (104%)                 | `9,708,738`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `117`ns (114%)        | `122`ns (118%)                 | `8,547,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `152`ns (148%)        | `170`ns (165%)                 | `6,578,947`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `35`ns (100%)         | `38`ns (109%)                  | `28,571,429`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `68`ns (194%)         | `93`ns (266%)                  | `14,705,882`/sec      |

<!-- endblock(results) -->
