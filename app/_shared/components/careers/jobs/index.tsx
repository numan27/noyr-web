"use client";
import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "components/common/customButton";
import CustomInput from "components/common/customInput";
import { Icons } from "assets";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";
import CustomSelect from "components/common/customSelect";
import CustomBadge from "components/common/customBadge";
import { GoDotFill } from "react-icons/go";
import { jobsData } from "utils/constants";
import useWindowDimensions from "hooks/useWindowDimensions";

interface Details {
  label: string;
  value: string;
}

interface Job {
  title: string;
  level: string;
  description: string;
  specifications: string[];
  details: Details[];
}

const Jobs = () => {
  const { width } = useWindowDimensions();
  const [selectedJob, setSelectedJob] = useState<Job | null>(jobsData[0]);
  const [expandedJobIndex, setExpandedJobIndex] = useState<number | null>(null);
  const jobRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!selectedJob && jobsData.length > 0) {
      setSelectedJob(jobsData[0]);
    }
  }, [selectedJob, jobsData]);

  useEffect(() => {
    if (width <= 640) {
      setExpandedJobIndex(0);
    } else {
      setSelectedJob(jobsData[0]);
    }
  }, [width]);

  const handleJobSelect = (job: Job) => {
    setSelectedJob(job);
  };

  const categoryOptions = [
    { title: "All Categories", value: "all" },
    { title: "IT & Software", value: "it_software" },
    { title: "Social Media Management", value: "social_media" },
    { title: "UI/UX Designer", value: "ui_ux" },
    { title: "Graphic Design", value: "graphic_design" },
    { title: "Content Writing", value: "content_writing" },
    { title: "Marketing & Advertising", value: "marketing_advertising" },
    { title: "Photography & Videography", value: "photography_videography" },
  ];

  const experienceOptions = [
    { title: "All Experience Levels", value: "all" },
    { title: "Entry Level (0-1 years)", value: "entry" },
    { title: "Mid Level (2-5 years)", value: "mid" },
    { title: "Senior Level (6+ years)", value: "senior" },
  ];

  const locationOptions = [
    { title: "All Locations", value: "all" },
    { title: "Austin, TX", value: "austin_tx" },
    { title: "Dallas, TX", value: "dallas_tx" },
    { title: "Houston, TX", value: "houston_tx" },
    { title: "San Antonio, TX", value: "san_antonio_tx" },
    { title: "Fort Worth, TX", value: "fort_worth_tx" },
    { title: "El Paso, TX", value: "el_paso_tx" },
    { title: "Plano, TX", value: "plano_tx" },
    { title: "Arlington, TX", value: "arlington_tx" },
  ];

  const toggleJobExpand = (index: number) => {
    setExpandedJobIndex((prev) => (prev === index ? null : index));

    setTimeout(() => {
      jobRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <section id="jobs" className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <div
          className={classNames(
            styles.filtersContainer,
            "flex flex-col lg:gap-10 gap-8 h-56"
          )}
        >
          <div
            className={classNames(
              "lg:w-6/12 md:w-7/12 sm:w-8/12 xs:w-9/12 w-full mx-auto relative my-auto"
            )}
          >
            <CustomAnimatedBorder
              gradientColors="linear-gradient(135deg, #EC1E24 0%, #141212 50%, #902880 100%)"
              animationSpeed="5s"
              borderRadius="6px"
            >
              <div className={classNames(styles.searchContainer, "m-1")}>
                <CustomInput
                  placeholder="Search for jobs.."
                  customInputContainer={classNames(styles.quoteInput)}
                />
                <span className="absolute right-3 top-4">
                  <Icons.Search />
                </span>
              </div>
            </CustomAnimatedBorder>
          </div>
          <div
            className={classNames(
              styles.filters,
              "grid grid-cols-12 lg:gap-6 gap-3 xl:w-9/12 lg:10/12 mx-auto"
            )}
          >
            <div
              className={classNames(styles.item, "lg:col-span-4 col-span-6")}
            >
              <label htmlFor="">Experience Level</label>
              <CustomSelect
                defaultActiveItem="All Experience Level"
                // @ts-ignore
                options={experienceOptions}
                // label="Experience Level"
              />
            </div>{" "}
            <div
              className={classNames(styles.item, "lg:col-span-3 col-span-6")}
            >
              <label htmlFor="">Location</label>
              <CustomSelect
                // @ts-ignore
                options={locationOptions}
                defaultActiveItem="All Location"
                // label="Experience Level"
              />
            </div>{" "}
            <div
              className={classNames(styles.item, "lg:col-span-3 col-span-6")}
            >
              <label htmlFor="">Categories</label>
              <CustomSelect
                // @ts-ignore
                options={categoryOptions}
                defaultActiveItem="All Categories"
                // label="Experience Level"
              />
            </div>{" "}
            <div
              className={classNames(
                styles.item,
                "lg:col-span-2 col-span-6 flex items-end"
              )}
            >
              <CustomButton
                containerStyle={classNames(styles.filterButton, "w-full")}
                title="Available Jobs"
              />
            </div>
          </div>
        </div>
        <div
          className={classNames(
            styles.contentWrapper,
            "grid sm:grid-cols-2 grid-cols-1 gap-6 mt-12"
          )}
        >
          {/* Job List */}
          <div
            className={classNames(
              styles.jobsListContainer,
              "flex flex-col gap-5"
            )}
          >
            {jobsData.map((job, index) => (
              <div
                // @ts-ignore
                ref={(el) => (jobRefs.current[index] = el)}
                key={index}
                onClick={() =>
                  width > 640 ? handleJobSelect(job) : toggleJobExpand(index)
                }
                className={classNames(styles.jobListItem, {
                  [styles.active]:
                    width > 640
                      ? selectedJob?.title === job.title ||
                        (selectedJob === jobsData[0] && job === jobsData[0])
                      : expandedJobIndex === index,
                })}
              >
                {expandedJobIndex !== index && (
                  <div
                    className={classNames(
                      styles.jobListDesktop,
                      "flex flex-col items-start gap-5"
                    )}
                  >
                    <h5>{job.title}</h5>
                    <CustomBadge title={job.level} />
                    <p className={styles.jobListItemDesc}>
                      <span className="font-medium">
                        Primary Responsibility:{" "}
                      </span>
                      {job.description}
                    </p>
                  </div>
                )}

                {/* Expandable Section on Mobile */}
                {expandedJobIndex === index && (
                  <div
                    className={classNames(
                      styles.jobsPreviewContainer,
                      "flex sm:hidden"
                    )}
                  >
                    <div
                      className={classNames(
                        styles.jobPreview,
                        "flex flex-col items-start gap-6"
                      )}
                    >
                      <div>
                        <h5 className="mb-3">{job.title}</h5>
                        <CustomBadge title={job.level} />
                      </div>
                      <div>
                        <span>Primary Responsibility:</span>
                        <p className="">{job.description}</p>{" "}
                      </div>
                      <div>
                        <span>Job Specification:</span>
                        <ul className="flex flex-col items-start gap-1.5 mt-2">
                          {job.specifications.map((items, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-1.5"
                            >
                              <span>
                                <GoDotFill />
                              </span>
                              {items}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div
                        className={classNames(
                          styles.details,
                          "flex flex-col items-start gap-3"
                        )}
                      >
                        {job.details.map((data, index) => (
                          <div key={index}>
                            <span>{data.label}</span>
                            <p>{data.value}</p>
                          </div>
                        ))}
                      </div>
                      <CustomButton
                        title="Apply Now"
                        containerStyle={classNames(
                          styles.applyButton,
                          "md-height-button"
                        )}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Job Preview for Desktop */}
          <div
            className={classNames(
              styles.jobsPreviewContainer,
              "hidden sm:block"
            )}
          >
            {selectedJob ? (
              <div
                className={classNames(
                  styles.jobPreview,
                  "flex flex-col items-start gap-6"
                )}
              >
                <div>
                  <h5 className="mb-3">{selectedJob.title}</h5>
                  <CustomBadge title={selectedJob.level} />
                </div>
                <div>
                  <span>Primary Responsibility:</span>
                  <p className="">{selectedJob.description}</p>{" "}
                </div>
                <div>
                  <span>Job Specification:</span>
                  <ul className="flex flex-col items-start gap-1.5 mt-2">
                    {selectedJob.specifications.map((items, index) => (
                      <li key={index} className="flex items-center gap-1.5">
                        <span>
                          <GoDotFill />
                        </span>
                        {items}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={classNames(
                    styles.details,
                    "flex flex-col items-start gap-3"
                  )}
                >
                  {selectedJob.details.map((data, index) => (
                    <div key={index}>
                      <span>{data.label}</span>
                      <p>{data.value}</p>
                    </div>
                  ))}
                </div>
                <CustomButton
                  title="Apply Now"
                  containerStyle={classNames(
                    styles.applyButton,
                    "md-height-button"
                  )}
                />
              </div>
            ) : (
              <p>Select a job to see details.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
