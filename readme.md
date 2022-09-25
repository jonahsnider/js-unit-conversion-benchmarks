# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 25 Sep 2022 01:04:50 GMT with Node.js v18.9.1 (V8 v10.2.154.15-node.12) on fv-az193-372 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (100%)        | `300`ns (150%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (151%)        | `301`ns (151%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `400`ns (200%)        | `401`ns (201%)                 | `2,500,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `600`ns (300%)        | `700`ns (350%)                 | `1,666,667`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `801`ns (401%)        | `900`ns (450%)                 | `1,248,439`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `901`ns (451%)        | `901`ns (451%)                 | `1,109,878`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,401`ns (701%)      | `1,500`ns (750%)               | `713,776`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,101`ns (1,551%)    | `3,101`ns (1,551%)             | `322,477`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,603`ns (3,302%)    | `6,803`ns (3,402%)             | `151,446`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `701`ns (100%)        | `701`ns (100%)                 | `1,426,534`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `33,215`ns (4,738%)   | `36,831`ns (5,254%)            | `30,107`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `60,223`ns (8,591%)   | `61,823`ns (8,819%)            | `16,605`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (199%)        | `301`ns (298%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (298%)        | `301`ns (298%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `400`ns (396%)        | `401`ns (397%)                 | `2,500,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `801`ns (793%)        | `900`ns (891%)                 | `1,248,439`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `901`ns (892%)        | `1,000`ns (990%)               | `1,109,878`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,201`ns (3,169%)    | `3,301`ns (3,268%)             | `312,402`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (100%)        | `300`ns (150%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (151%)        | `301`ns (151%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `801`ns (401%)        | `901`ns (451%)                 | `1,248,439`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,100`ns (550%)      | `1,200`ns (600%)               | `909,091`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,103`ns (2,052%)    | `4,203`ns (2,102%)             | `243,724`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,403`ns (2,202%)    | `4,503`ns (2,252%)             | `227,118`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `400`ns (100%)        | `401`ns (100%)                 | `2,500,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `400`ns (100%)        | `401`ns (100%)                 | `2,500,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `300`ns (149%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
