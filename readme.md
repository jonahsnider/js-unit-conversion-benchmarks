# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 03 Oct 2023 01:21:00 GMT with Node.js v18.18.0 (V8 v10.2.154.26-node.26) on fv-az417-332 (Linux-x64 Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `301`ns (151%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (200%)        | `400`ns (200%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (201%)        | `500`ns (250%)                 | `2,493,766`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `701`ns (351%)        | `701`ns (351%)                 | `1,426,534`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `900`ns (450%)        | `901`ns (451%)                 | `1,111,111`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `901`ns (451%)        | `901`ns (451%)                 | `1,109,878`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,600`ns (800%)      | `1,601`ns (801%)               | `625,000`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,401`ns (1,701%)    | `3,401`ns (1,701%)             | `294,031`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,603`ns (2,802%)    | `5,703`ns (2,852%)             | `178,476`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `800`ns (100%)        | `801`ns (100%)                 | `1,250,000`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,703`ns (4,588%)   | `41,631`ns (5,204%)            | `27,246`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `51,327`ns (6,416%)   | `52,223`ns (6,528%)            | `19,483`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (100%)        | `300`ns (150%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (200%)        | `400`ns (200%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (201%)        | `500`ns (250%)                 | `2,493,766`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `801`ns (401%)        | `901`ns (451%)                 | `1,248,439`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `900`ns (450%)        | `901`ns (451%)                 | `1,111,111`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,601`ns (1,801%)    | `3,601`ns (1,801%)             | `277,701`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `301`ns (151%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `301`ns (151%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `901`ns (451%)        | `901`ns (451%)                 | `1,109,878`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,200`ns (600%)      | `1,200`ns (600%)               | `833,333`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `3,701`ns (1,851%)    | `3,801`ns (1,901%)             | `270,197`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,703`ns (2,352%)    | `4,803`ns (2,402%)             | `212,630`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `400`ns (100%)        | `401`ns (100%)                 | `2,500,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `501`ns (125%)                 | `2,000,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `500`ns (125%)        | `500`ns (125%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (199%)        | `400`ns (199%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
