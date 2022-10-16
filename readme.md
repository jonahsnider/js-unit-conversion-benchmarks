# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 16 Oct 2022 02:13:52 GMT with Node.js v18.10.0 (V8 v10.2.154.15-node.12) on fv-az193-727 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (298%)        | `400`ns (396%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `600`ns (594%)        | `801`ns (793%)                 | `1,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (594%)        | `701`ns (694%)                 | `1,666,667`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `900`ns (891%)        | `901`ns (892%)                 | `1,111,111`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,301`ns (1,288%)    | `1,600`ns (1,584%)             | `768,640`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,500`ns (1,485%)    | `1,800`ns (1,782%)             | `666,667`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,301`ns (2,278%)    | `2,601`ns (2,575%)             | `434,594`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,303`ns (4,260%)    | `4,803`ns (4,755%)             | `232,396`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,503`ns (7,429%)    | `8,103`ns (8,023%)             | `133,280`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,401`ns (100%)      | `1,700`ns (121%)               | `713,776`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `50,719`ns (3,620%)   | `56,607`ns (4,040%)            | `19,716`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `63,327`ns (4,520%)   | `74,559`ns (5,322%)            | `15,791`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `301`ns (151%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (200%)        | `500`ns (250%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (300%)        | `600`ns (300%)                 | `1,666,667`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,100`ns (550%)      | `1,401`ns (701%)               | `909,091`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,500`ns (750%)      | `1,800`ns (900%)               | `666,667`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,103`ns (2,052%)    | `4,503`ns (2,252%)             | `243,724`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (151%)        | `400`ns (200%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `600`ns (300%)        | `701`ns (351%)                 | `1,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,501`ns (751%)      | `1,800`ns (900%)               | `666,223`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,800`ns (900%)      | `2,201`ns (1,101%)             | `555,556`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,703`ns (2,352%)    | `5,103`ns (2,552%)             | `212,630`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,603`ns (2,802%)    | `6,303`ns (3,152%)             | `178,476`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `400`ns (100%)        | `400`ns (100%)                 | `2,500,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `400`ns (100%)        | `400`ns (100%)                 | `2,500,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
