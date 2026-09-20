# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 20 Sep 2026 23:47:20 GMT with Node.js v26.9.0 (V8 v14.6.202.34-node.32) on runnervmlun5p (Linux-x64 INTEL(R) XEON(R) PLATINUM 8573C)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `46`ns (100%)         | `47`ns (102%)                  | `21,739,130`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `89`ns (193%)         | `92`ns (200%)                  | `11,235,955`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `102`ns (222%)        | `106`ns (230%)                 | `9,803,922`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `123`ns (267%)        | `126`ns (274%)                 | `8,130,081`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `155`ns (337%)        | `165`ns (359%)                 | `6,451,613`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `286`ns (622%)        | `296`ns (643%)                 | `3,496,503`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `379`ns (824%)        | `404`ns (878%)                 | `2,638,522`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `411`ns (893%)        | `421`ns (915%)                 | `2,433,090`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `889`ns (1,933%)      | `915`ns (1,989%)               | `1,124,859`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,425`ns (3,098%)    | `1,463`ns (3,180%)             | `701,754`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `289`ns (100%)        | `303`ns (105%)                 | `3,460,208`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `926`ns (320%)        | `1,014`ns (351%)               | `1,079,914`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `17,903`ns (6,195%)   | `18,191`ns (6,294%)            | `55,857`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `45`ns (100%)         | `46`ns (102%)                  | `22,222,222`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (244%)        | `114`ns (253%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `112`ns (249%)        | `117`ns (260%)                 | `8,928,571`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `113`ns (251%)        | `118`ns (262%)                 | `8,849,558`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `155`ns (344%)        | `168`ns (373%)                 | `6,451,613`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `425`ns (944%)        | `434`ns (964%)                 | `2,352,941`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,551`ns (3,447%)    | `1,593`ns (3,540%)             | `644,745`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `48`ns (100%)         | `50`ns (104%)                  | `20,833,333`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `102`ns (213%)        | `106`ns (221%)                 | `9,803,922`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (229%)        | `116`ns (242%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `117`ns (244%)        | `123`ns (256%)                 | `8,547,009`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `427`ns (890%)        | `452`ns (942%)                 | `2,341,920`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,093`ns (2,277%)    | `1,107`ns (2,306%)             | `914,913`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,155`ns (4,490%)    | `2,195`ns (4,573%)             | `464,037`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `153`ns (100%)        | `156`ns (102%)                 | `6,535,948`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `187`ns (122%)        | `192`ns (125%)                 | `5,347,594`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `231`ns (151%)        | `237`ns (155%)                 | `4,329,004`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `47`ns (100%)         | `48`ns (102%)                  | `21,276,596`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `90`ns (191%)         | `96`ns (204%)                  | `11,111,111`/sec      |

<!-- endblock(results) -->
