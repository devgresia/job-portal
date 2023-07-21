"use client";
import type { NextPage } from "next";
import { useState, useEffect, ChangeEvent, SetStateAction } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Box,
  Stepper,
  Button,
  Group,
  TextInput,
  Textarea,
  Grid,
  Select,
  Checkbox,
  MultiSelect,
  NativeSelect,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";

const CreateResume: NextPage = () => {
  // Mantine Stepper
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  // Form Data Collection
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    contact: string;
    email: string;
    address: string;
    job_title: string;
    github: string;
    linkedIn: string;
    facebook: string;
    portfolio: string;
    summary: string;
    volunteerWorks: string;
    interests: string;
    accomplishments: string;
    certifications: string;
    references: string;
    language: object[];
    skills: string[];
    work_history: object[];
    education: object[];
  }>({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    address: "",
    job_title: "",
    github: "",
    linkedIn: "",
    facebook: "",
    portfolio: "",
    summary: "",
    volunteerWorks: "",
    interests: "",
    accomplishments: "",
    certifications: "",
    references: "",
    language: [],
    skills: [],
    work_history: [],
    education: [],
  });

  // Breakdown each form for their respective steps, for easier form management.
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Mantine",
    "React",
    "Angular",
    "Svelte",
    "Vue",
  ]);

  // Handles Personal Step
  const handlePersonal = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // Handles Summary Step
  const handleSummary = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // Handling Work history

  const [workHistory, setWorkHistory] = useState<
    Array<{
      company: string;
      job_title: string;
      company_website: string;
      employment_type: string;
      country: string;
      city: string;
      from: string;
      to: string;
      current: boolean;
      tech: Array<string>;
      desc: string;
    }>
  >([
    {
      company: "",
      job_title: "",
      company_website: "",
      employment_type: "",
      country: "",
      city: "",
      from: "",
      to: "",
      current: false,
      tech: [],
      desc: "",
    },
  ]);

  const [language, setLanguage] = useState<
    Array<{
      languageName: string;
      proficiency: string;
    }>
  >([
    {
      languageName: "",
      proficiency: "",
    },
  ]);

  const addLanguages = () => {
    setLanguage((prev) => [
      ...prev,
      {
        languageName: "",
        proficiency: "",
      },
    ]);
  };

  const removeLanguage = (index: number) => {
    let newLanguage = [...language];
    newLanguage.splice(index, 1);
    setLanguage(newLanguage);
  };

  useEffect(() => {
    console.log(language);
  }, [language]);

  const addWorkHistory = () => {
    setWorkHistory([
      ...workHistory,
      {
        company: "",
        job_title: "",
        company_website: "",
        employment_type: "",
        country: "",
        city: "",
        from: "",
        to: "",
        current: false,
        tech: [],
        desc: "",
      },
    ]);
  };

  const removeWorkHistory = (i: number) => {
    let newWorkHistory = [...workHistory];
    newWorkHistory.splice(i, 1);
    setWorkHistory(newWorkHistory);
  };

  useEffect(() => {
    console.log(workHistory);
  }, [workHistory]);

  // Handling Education

  const [education, setEducation] = useState<
    Array<{
      Institution: string;
      degree: string;
      field_of_study: string;
      grade: string;
      country: string;
      city: string;
      from: string;
      to: string;
      desc: string;
    }>
  >([
    {
      Institution: "",
      degree: "",
      field_of_study: "",
      grade: "",
      country: "",
      city: "",
      from: "",
      to: "",
      desc: "",
    },
  ]);

  const addEducation = () => {
    setEducation([
      ...education,
      {
        Institution: "",
        degree: "",
        field_of_study: "",
        grade: "",
        country: "",
        city: "",
        from: "",
        to: "",
        desc: "",
      },
    ]);
  };

  const removeEducation = (i: number) => {
    let newEducation = [...education];
    newEducation.splice(i, 1);
    setEducation(newEducation);
  };

  // Collecting form data that was broken down in one state.
  const collectFormData = () => {
    const newFormData = { ...formData };
    setFormData({
      ...newFormData,
      work_history: workHistory,
      education: education,
      language: language,
    });
    console.log(workHistory);

    console.log(formData);
  };

  return (
    <>
      <Head>
        <title>Create Your Resume!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Link href="/" passHref>
          <Button
            size={"xs"}
            component="a"
            color={"#3b82f6"}
            variant={"outline"}
          >
            Go Back
          </Button>
        </Link>
        <Box component="main" sx={{ padding: "4rem 0" }}>
          <Stepper
            orientation={"horizontal"}
            active={active}
            onStepClick={setActive}
            breakpoint="sm"
            color={"#22c55e"}
          >
            {/* Personal Step */}
            <Stepper.Step
              label="Personal Details"
              description={""}
              allowStepSelect={active > 0}
            >
              <Grid>
                <Grid.Col xs={6} sm={6}>
                  <TextInput
                    id="firstName"
                    label="First Name"
                    onChange={handlePersonal}
                    value={formData.firstName}
                    required
                  />
                </Grid.Col>
                <Grid.Col xs={6} sm={6}>
                  <TextInput
                    id="lastName"
                    label="Last Name"
                    onChange={handlePersonal}
                    value={formData.lastName}
                    required
                  />
                </Grid.Col>
                <Grid.Col xs={6} sm={6}>
                  <TextInput
                    id="job_title"
                    label="Job Title"
                    onChange={handlePersonal}
                    value={formData.job_title}
                    required
                  />
                </Grid.Col>
                <Grid.Col xs={6} sm={6}>
                  <TextInput
                    id="email"
                    label="Email"
                    onChange={handlePersonal}
                    value={formData.email}
                    required
                  />
                </Grid.Col>
                <Grid.Col xs={6} sm={6}>
                  <TextInput
                    id="contact"
                    label="Contact Number"
                    onChange={handlePersonal}
                    value={formData.contact}
                    required
                  />
                </Grid.Col>
                <Grid.Col xs={6} sm={6}>
                  <TextInput
                    id="address"
                    label="Address"
                    onChange={handlePersonal}
                    value={formData.address}
                  />
                </Grid.Col>
              </Grid>
            </Stepper.Step>
            {/* Summary Step */}
            <Stepper.Step
              label="Summary"
              description={""}
              allowStepSelect={active > 2}
            >
              <Grid>
                <Grid.Col xs={5} sm={5}>
                  <Select
                    name="languageName"
                    // value={language.languageName}
                    // onChange={(e: string) => {
                    //   const newLanguage = [...language];
                    //   newLanguage[index]["language"] = e;
                    //   setLanguage(newLanguage);
                    // }}
                    label="Language"
                    placeholder="Select"
                    data={[
                      { value: "English", label: "English" },
                      { value: "Nepali", label: "Nepali" },
                      { value: "Hindi", label: "Hindi" },
                      { value: "French", label: "French" },
                      { value: "Japanese", label: "Japanese" },
                      { value: "Spanish", label: "Spanish" },
                    ]}
                  />
                </Grid.Col>
                <Grid.Col xs={5} sm={5}>
                  <Select
                    name="proficiency"
                    // value={language.languageName}
                    // onChange={(e: string) => {
                    //   const newLanguage = [...language];
                    //   newLanguage[index]["language"] = e;
                    //   setLanguage(newLanguage);
                    // }}
                    label="Proficiency Level"
                    placeholder="Select"
                    data={[
                      { value: "Basic knowledge", label: "Basic knowledge" },
                      {
                        value: "Good/conversational",
                        label: "Good/conversational",
                      },
                      { value: "Fluent", label: "Fluent" },
                      { value: "Business fluent", label: "Business fluent" },
                      { value: "Native language", label: "Native language" },
                    ]}
                  />
                </Grid.Col>
                <Grid.Col
                  xs={1}
                  sm={1}
                  className="relative m-auto p-0 bottom-0 -left-0 flex"
                  // style={{ paddingRight: "1 1 1 1" }}
                >
                  <FaSquarePlus
                    color="#22c55e"
                    fontSize={"2.4rem"}
                    className="mt-6 ml-auto"
                  />
                </Grid.Col>
                <Grid.Col xs={1} sm={1}>
                  <FaSquareMinus
                    color="red"
                    fontSize={"2.4rem"}
                    className="mt-6"
                  />
                </Grid.Col>
                <Grid.Col xs={12} sm={12}>
                  <TextInput
                    id="interests"
                    label="Interests"
                    onChange={handlePersonal}
                    value={formData.interests}
                    required
                  />
                </Grid.Col>
                <Grid.Col xs={12} sm={12}>
                  <Textarea
                    id="volunteerWorks"
                    label="Volunteer Works"
                    onChange={handleSummary}
                    value={formData.volunteerWorks}
                    required
                  />
                </Grid.Col>
                <Grid.Col xs={12} sm={12}>
                  <Textarea
                    id="summary"
                    label="Summary"
                    onChange={handleSummary}
                    value={formData.summary}
                    required
                  />
                </Grid.Col>
              </Grid>
            </Stepper.Step>
            {/* Work History Step */}
            <Stepper.Step
              label="Work History"
              description={""}
              allowStepSelect={active > 2}
            >
              <Button
                color={"violet"}
                size="xs"
                variant="subtle"
                onClick={addWorkHistory}
              >
                Add Work History
              </Button>
              {workHistory.map((work, index) => {
                return (
                  <Grid key={index}>
                    <Grid.Col xs={8} sm={8}>
                      <TextInput
                        name="company"
                        value={work.company}
                        onChange={(e) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["company"] = e.target.value;
                          setWorkHistory(newWorkHistory);
                        }}
                        label="Company"
                        // onChange={handleWorkHistory(index)}
                      />
                    </Grid.Col>
                    <Grid.Col xs={4} sm={4}>
                      <TextInput
                        name="job_title"
                        value={work.job_title}
                        onChange={(e) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["job_title"] = e.target.value;
                          setWorkHistory(newWorkHistory);
                        }}
                        label="Job Title"
                      />
                    </Grid.Col>
                    <Grid.Col xs={12} sm={8}>
                      <TextInput
                        name="company_website"
                        value={work.company_website}
                        onChange={(e) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["company_website"] =
                            e.target.value;
                          setWorkHistory(newWorkHistory);
                        }}
                        label="Company Website"
                      />
                    </Grid.Col>
                    <Grid.Col xs={4} sm={4}>
                      <Select
                        name="employment_type"
                        value={work.employment_type}
                        onChange={(e: string) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["employment_type"] = e;
                          setWorkHistory(newWorkHistory);
                        }}
                        label="Employment Type"
                        data={[
                          { value: "full-time", label: "Full-time" },
                          { value: "part-time", label: "Part-time" },
                          { value: "contract", label: "Contract" },
                          { value: "freelance", label: "Freelance" },
                          { value: "self-employed", label: "Self-employed" },
                          { value: "internship", label: "Internship" },
                        ]}
                      />
                    </Grid.Col>
                    <Grid.Col xs={4} sm={6}>
                      <TextInput
                        name="country"
                        value={work.country}
                        onChange={(e) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["country"] = e.target.value;
                          setWorkHistory(newWorkHistory);
                        }}
                        label="Country"
                      />
                    </Grid.Col>
                    <Grid.Col xs={4} sm={6}>
                      <TextInput
                        name="city"
                        value={work.city}
                        onChange={(e) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["city"] = e.target.value;
                          setWorkHistory(newWorkHistory);
                        }}
                        label="City"
                      />
                    </Grid.Col>
                    <Grid.Col xs={4} sm={6}>
                      <TextInput
                        name="from"
                        id="from"
                        value={work.from}
                        //@ts-ignore
                        onChange={(e: string) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["from"] = e;
                          setWorkHistory(newWorkHistory);
                        }}
                        placeholder="YYYY-MM-DD"
                        label="From"
                      />
                    </Grid.Col>
                    <Grid.Col xs={4} sm={6}>
                      {work.current ? (
                        <TextInput
                          name="to"
                          value={work.to}
                          disabled
                          //@ts-ignore
                          onChange={(e: string) => {
                            const newWorkHistory = [...workHistory];
                            newWorkHistory[index]["to"] = e;
                            setWorkHistory(newWorkHistory);
                          }}
                          placeholder="YYYY-MM-DD"
                          label="To"
                        />
                      ) : (
                        <TextInput
                          name="to"
                          //@ts-ignore
                          {...(work.current ? "disabled" : null)}
                          value={work.to}
                          //@ts-ignore
                          onChange={(e: string) => {
                            const newWorkHistory = [...workHistory];
                            newWorkHistory[index]["to"] = e;
                            setWorkHistory(newWorkHistory);
                          }}
                          placeholder="YYYY-MM-DD"
                          label="To"
                        />
                      )}
                    </Grid.Col>
                    <Grid.Col xs={4} sm={6}>
                      {/* Todo checkbox enable To date becomes disabled */}
                      <Checkbox
                        name="current"
                        checked={work.current}
                        onChange={(e) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["current"] = e.target.checked;
                          setWorkHistory(newWorkHistory);
                        }}
                        color={"violet"}
                        label="I currently work here"
                      />
                    </Grid.Col>
                    <Grid.Col xs={12} sm={12}>
                      <MultiSelect
                        value={work.tech}
                        onChange={(e) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["tech"] = e;
                          setWorkHistory(newWorkHistory);
                        }}
                        color={"violet"}
                        searchable
                        nothingFound="Nothing found"
                        clearButtonLabel="Clear selection"
                        description="We recommend to keep your technologies max 10-12"
                        clearable
                        data={skills}
                        creatable
                        getCreateLabel={(query) => `+ Create ${query}`}
                        //@ts-ignore
                        onCreate={(query) =>
                          setSkills((current) => [...current, query])
                        }
                        label="Technologies"
                        aria-label="Select technologies"
                      />
                    </Grid.Col>
                    <Grid.Col xs={12} sm={12}>
                      <Textarea
                        value={work.desc}
                        onChange={(e) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["desc"] = e.target.value;
                          setWorkHistory(newWorkHistory);
                        }}
                        label="Description"
                      />
                    </Grid.Col>
                    <Grid.Col>
                      <Button
                        color={"red"}
                        size="xs"
                        variant="subtle"
                        onClick={(index: any) => {
                          removeWorkHistory(index);
                        }}
                      >
                        Delete Work History
                      </Button>
                    </Grid.Col>
                  </Grid>
                );
              })}
            </Stepper.Step>
            {/* Skills step */}
            <Stepper.Step
              label="Skills"
              description={""}
              allowStepSelect={active > 3}
            >
              <Grid>
                <Grid.Col xs={12} sm={12}>
                  <MultiSelect
                    color={"#3b82f6"}
                    searchable
                    nothingFound="Nothing found"
                    clearButtonLabel="Clear selection"
                    description="We recommend to keep your skills max 10-12. Can not find your skill? Create one!"
                    clearable
                    data={skills}
                    creatable
                    getCreateLabel={(query) => `+ Create ${query}`}
                    //@ts-ignore
                    onCreate={(query) =>
                      setSkills((current) => [...current, query])
                    }
                    label="Skills"
                    aria-label="Select skills"
                    onChange={(e) => {
                      const newFormData = { ...formData };
                      newFormData["skills"] = e;
                      setFormData(newFormData);
                    }}
                  />
                </Grid.Col>
                <Grid.Col xs={12} sm={12}>
                  <Textarea
                    id="accomplishments"
                    label="Accomplishments"
                    onChange={handleSummary}
                    value={formData.accomplishments}
                  />
                </Grid.Col>
                <Grid.Col xs={12} sm={12}>
                  <Textarea
                    id="certifications"
                    label="Certifications"
                    onChange={handleSummary}
                    value={formData.certifications}
                  />
                </Grid.Col>
                <Grid.Col xs={12} sm={12}>
                  <Textarea
                    id="references"
                    label="References"
                    onChange={handleSummary}
                    value={formData.references}
                  />
                </Grid.Col>
              </Grid>
            </Stepper.Step>
            {/* Education Step */}
            <Stepper.Step
              label="Education"
              description={""}
              allowStepSelect={active > 4}
            >
              <Button
                color={"#3b82f6"}
                size="xs"
                variant="subtle"
                onClick={addEducation}
              >
                Add Education
              </Button>
              {education.map((edu, index) => {
                return (
                  <>
                    <Grid key={index}>
                      <Grid.Col xs={8} sm={8}>
                        <TextInput
                          label="Institution"
                          value={edu.Institution}
                          onChange={(e) => {
                            const newEducation = [...education];
                            newEducation[index]["Institution"] = e.target.value;
                            setEducation(newEducation);
                          }}
                        />
                      </Grid.Col>
                      <Grid.Col xs={4} sm={4}>
                        <Select
                          label="Degree"
                          placeholder="Select"
                          data={[
                            {
                              value: "associate-degree",
                              label: "Associate Degree",
                            },
                            {
                              value: "bachelor-degree",
                              label: "Bachelor Degree",
                            },
                            { value: "master", label: "Masters" },
                            { value: "doctoral", label: "Doctoral" },
                            {
                              value: "professional-degree",
                              label: "Professional Degree",
                            },
                            { value: "joint-degree", label: "Joint Degree" },
                          ]}
                          value={edu.degree}
                          onChange={(e: string) => {
                            const newEducation = [...education];
                            newEducation[index]["degree"] = e;
                            setEducation(newEducation);
                          }}
                        />
                      </Grid.Col>
                      <Grid.Col xs={12} sm={8}>
                        <TextInput
                          label="Field of study"
                          value={edu.field_of_study}
                          onChange={(e) => {
                            const newEducation = [...education];
                            newEducation[index]["Institution"] = e.target.value;
                            setEducation(newEducation);
                          }}
                        />
                      </Grid.Col>
                      <Grid.Col xs={4} sm={4}>
                        <TextInput
                          label="Grade/GPA"
                          value={edu.grade}
                          onChange={(e) => {
                            const newEducation = [...education];
                            newEducation[index]["grade"] = e.target.value;
                            setEducation(newEducation);
                          }}
                        />
                      </Grid.Col>
                      <Grid.Col xs={4} sm={6}>
                        <TextInput
                          label="Country"
                          value={edu.country}
                          onChange={(e) => {
                            const newEducation = [...education];
                            newEducation[index]["country"] = e.target.value;
                            setEducation(newEducation);
                          }}
                        />
                      </Grid.Col>
                      <Grid.Col xs={4} sm={6}>
                        <TextInput
                          label="City"
                          value={edu.city}
                          onChange={(e) => {
                            const newEducation = [...education];
                            newEducation[index]["city"] = e.target.value;
                            setEducation(newEducation);
                          }}
                        />
                      </Grid.Col>
                      <Grid.Col xs={4} sm={6}>
                        <TextInput
                          name="from"
                          value={edu.from}
                          //@ts-ignore
                          onChange={(e: string) => {
                            const newEducation = [...education];
                            newEducation[index]["from"] = e;
                            setEducation(newEducation);
                          }}
                          placeholder="YYYY-MM-DD"
                          label="From"
                        />
                      </Grid.Col>
                      <Grid.Col xs={4} sm={6}>
                        <TextInput
                          name="to"
                          value={edu.to}
                          //@ts-ignore
                          onChange={(e: string) => {
                            const newEducation = [...education];
                            newEducation[index]["to"] = e;
                            setEducation(newEducation);
                          }}
                          placeholder="YYYY-MM-DD"
                          label="To"
                        />
                      </Grid.Col>
                      <Grid.Col xs={12} sm={12}>
                        <Textarea label="Description" />
                      </Grid.Col>
                      <Grid.Col>
                        <Button
                          color={"red"}
                          size="xs"
                          variant="subtle"
                          onClick={(index: any) => {
                            removeEducation(index);
                          }}
                        >
                          Delete Education
                        </Button>
                      </Grid.Col>
                    </Grid>
                  </>
                );
              })}
            </Stepper.Step>
            {/* Social Step */}
            <Stepper.Step
              label="Social"
              description={""}
              allowStepSelect={active > 0}
            >
              <Grid>
                <Grid.Col xs={6} sm={6}>
                  <TextInput
                    id="linkedIn"
                    label="LinkedIn"
                    onChange={handlePersonal}
                    value={formData.linkedIn}
                  />
                </Grid.Col>
                <Grid.Col xs={6} sm={6}>
                  <TextInput
                    id="github"
                    label="GitHub"
                    onChange={handlePersonal}
                    value={formData.github}
                    required
                  />
                </Grid.Col>
                <Grid.Col xs={6} sm={6}>
                  <TextInput
                    id="portfolio"
                    label="Portfolio Website"
                    onChange={handlePersonal}
                    value={formData.portfolio}
                    required
                  />
                </Grid.Col>
                <Grid.Col xs={6} sm={6}>
                  <TextInput
                    id="facebook"
                    label="Facebook"
                    onChange={handlePersonal}
                    value={formData.facebook}
                    required
                  />
                </Grid.Col>
              </Grid>
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>
          <Group position="center" mt="xl">
            {active < 1 ? (
              <Button
                color={"#3b82f6"}
                variant={"outline"}
                disabled
                onClick={prevStep}
              >
                Back
              </Button>
            ) : (
              <Button color={"#3b82f6"} variant={"outline"} onClick={prevStep}>
                Back
              </Button>
            )}

            {active >= 5 ? (
              <Button color={"#3b82f6"} onClick={collectFormData}>
                Complete
              </Button>
            ) : (
              <Button color={"#3b82f6"} onClick={nextStep} variant={"outline"}>
                Next step
              </Button>
            )}
          </Group>
        </Box>
      </Box>
    </>
  );
};

export default CreateResume;
