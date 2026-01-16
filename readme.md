# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 16 Jan 2026 11:28:46 GMT with Node.js v24.12.0 (V8 v13.6.233.17-node.37) on runnervmmtnos (Linux-x64 Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `62`ns (100%)         | `63`ns (102%)                  | `16,129,032`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `109`ns (176%)        | `111`ns (179%)                 | `9,174,312`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `122`ns (197%)        | `124`ns (200%)                 | `8,196,721`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `158`ns (255%)        | `169`ns (273%)                 | `6,329,114`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `209`ns (337%)        | `219`ns (353%)                 | `4,784,689`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `329`ns (531%)        | `342`ns (552%)                 | `3,039,514`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `511`ns (824%)        | `530`ns (855%)                 | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `660`ns (1,065%)      | `675`ns (1,089%)               | `1,515,152`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,048`ns (1,690%)    | `1,113`ns (1,795%)             | `954,198`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,729`ns (2,789%)    | `1,758`ns (2,835%)             | `578,369`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `407`ns (100%)        | `425`ns (104%)                 | `2,457,002`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,437`ns (353%)      | `1,522`ns (374%)               | `695,894`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `23,823`ns (5,853%)   | `24,431`ns (6,003%)            | `41,976`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `38`ns (100%)         | `39`ns (103%)                  | `26,315,789`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `129`ns (339%)        | `131`ns (345%)                 | `7,751,938`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `145`ns (382%)        | `148`ns (389%)                 | `6,896,552`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `156`ns (411%)        | `160`ns (421%)                 | `6,410,256`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `207`ns (545%)        | `230`ns (605%)                 | `4,830,918`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `615`ns (1,618%)      | `626`ns (1,647%)               | `1,626,016`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,940`ns (5,105%)    | `1,990`ns (5,237%)             | `515,464`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `61`ns (100%)         | `63`ns (103%)                  | `16,393,443`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `102`ns (167%)        | `105`ns (172%)                 | `9,803,922`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `129`ns (211%)        | `132`ns (216%)                 | `7,751,938`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `151`ns (248%)        | `154`ns (252%)                 | `6,622,517`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `544`ns (892%)        | `583`ns (956%)                 | `1,838,235`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,553`ns (2,546%)    | `1,578`ns (2,587%)             | `643,915`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,491`ns (4,084%)    | `2,545`ns (4,172%)             | `401,445`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `185`ns (100%)        | `190`ns (103%)                 | `5,405,405`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `227`ns (123%)        | `232`ns (125%)                 | `4,405,286`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `300`ns (162%)        | `320`ns (173%)                 | `3,333,333`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `60`ns (100%)         | `61`ns (102%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `114`ns (190%)        | `121`ns (202%)                 | `8,771,930`/sec       |

<!-- endblock(results) -->
