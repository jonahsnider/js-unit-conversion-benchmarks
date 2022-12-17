# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 17 Dec 2022 01:32:50 GMT with Node.js v18.12.1 (V8 v10.2.154.15-node.12) on fv-az338-546 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (297%)        | `301`ns (298%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (297%)        | `301`ns (298%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `400`ns (396%)        | `401`ns (397%)                 | `2,500,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `600`ns (594%)        | `600`ns (594%)                 | `1,666,667`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `801`ns (793%)        | `801`ns (793%)                 | `1,248,439`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `801`ns (793%)        | `801`ns (793%)                 | `1,248,439`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,301`ns (1,288%)    | `1,401`ns (1,387%)             | `768,640`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,101`ns (3,070%)    | `3,201`ns (3,169%)             | `322,477`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,603`ns (6,538%)    | `6,703`ns (6,637%)             | `151,446`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `701`ns (100%)        | `801`ns (114%)                 | `1,426,534`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,831`ns (4,683%)   | `36,511`ns (5,208%)            | `30,459`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `59,423`ns (8,477%)   | `60,831`ns (8,678%)            | `16,829`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (100%)        | `300`ns (150%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `301`ns (151%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `400`ns (200%)        | `401`ns (201%)                 | `2,500,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `801`ns (401%)        | `801`ns (401%)                 | `1,248,439`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `900`ns (450%)        | `901`ns (451%)                 | `1,111,111`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,101`ns (1,551%)    | `3,201`ns (1,601%)             | `322,477`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (100%)        | `300`ns (150%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (151%)        | `301`ns (151%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `801`ns (401%)        | `901`ns (451%)                 | `1,248,439`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,100`ns (550%)      | `1,100`ns (550%)               | `909,091`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,103`ns (2,052%)    | `4,203`ns (2,102%)             | `243,724`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,203`ns (2,102%)    | `4,303`ns (2,152%)             | `237,925`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `400`ns (100%)        | `401`ns (100%)                 | `2,500,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `400`ns (100%)        | `401`ns (100%)                 | `2,500,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (199%)        | `400`ns (199%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
